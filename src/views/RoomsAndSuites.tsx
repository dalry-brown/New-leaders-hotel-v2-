import roomStyle from "../styles/view-styles/rooms-and-suites.module.css";
import { KeyboardArrowDown, Add, Remove } from '@mui/icons-material';
import { usePageStore, useScreenSizeStore, useRoomStore, useDropdownStore, useRoomSettingsStore } from '../store/basicStore';
import { useEffect, useRef, useState } from 'react';
import { useLocation, Link, useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import MyDatePicker from "../components/universal-components/MyDatePicker";

// Type for DropDownMenu props
interface DropDownMenuProps {
  dropdownRef: React.RefObject<HTMLUListElement>;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ dropdownRef }) => {
  const { setVipRoom, setExecutiveRoom, setDoubleRoom, setSingleRoom, resetRooms } = useRoomStore();
  const { closeDropdown } = useDropdownStore();
  const { setVipRoomType, setExecutiveRoomType } = useRoomSettingsStore();

  return (
    <ul className={roomStyle.updatedDropLink} ref={dropdownRef}>
      <Link className={roomStyle.dropLink} onClick={() => { setVipRoom(); closeDropdown(); setVipRoomType()}} to="#">
        <li>VIP Lounge</li>
      </Link>
      <Link className={roomStyle.dropLink} onClick={() => { setExecutiveRoom(); closeDropdown(); setExecutiveRoomType() }} to="#">
        <li>Executive Lounge</li>
      </Link>
      <Link className={roomStyle.dropLink} onClick={() => { setDoubleRoom(); closeDropdown(); }} to="#">
        <li>Standard Double</li>
      </Link>
      <Link className={roomStyle.dropLink} onClick={() => { setSingleRoom(); closeDropdown(); }} to="#">
        <li>Single Occupancy</li>
      </Link>
      <Link className={roomStyle.dropLink} onClick={() => { resetRooms(); closeDropdown(); }} to="#">
        <li>All Rooms</li>
      </Link>
    </ul>
  );
};

const RoomsAndSuites: React.FC = () => {
  const location = useLocation();
  const { uniqueRooms, rooms } = useRoomStore();
  const { selectRooms } = usePageStore();
  const { screenWidth } = useScreenSizeStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const checkInRef = useRef<HTMLButtonElement>(null);
  const checkOutRef = useRef<HTMLButtonElement>(null);
  const datePickerRef = useRef<HTMLDivElement>(null);
  const { setTempRoom, roomType, setNumberOfPeople } = useRoomSettingsStore();
  const navigate = useNavigate();
  const [count, setCount] = useState<Record<string, number>>({
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0
  });
  const keys = Object.keys(count);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
    if (checkInRef.current && !checkInRef.current.contains(event.target as Node) &&
      datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
      setIsCheckInOpen(false);
    }
    if (checkOutRef.current && !checkOutRef.current.contains(event.target as Node) &&
      datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
      setIsCheckOutOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // useEffect(() => {
  //   if (roomType) {
  //     for (const room of rooms) {
  //       if (room.roomType.accType === roomType && room.checkIn === null) {
  //         setTempRoom(room);
  //         break;
  //       }
  //     }
  //   }
  // }, [roomType, rooms, setTempRoom]);
  useEffect(() => {
    if (roomType) {
      for (const room of rooms) {
        if (room.roomType.accType === roomType && room.checkIn === null) {
          setTempRoom((prev) => ({
            ...prev,
            id: room.id.toString(), // Ensure id is a string
            roomType: room.roomType.accType,
            checkIn: room.checkIn ? new Date(room.checkIn) : null, // Convert to Date if necessary
            checkOut: room.checkOut ? new Date(room.checkOut) : null, // Convert to Date if necessary
            number: room.number
          }));
          break;
        }
      }
    }
  }, [roomType, rooms, setTempRoom]);
  
  




  useEffect(() => {
    setTempRoom(prev => ({
      ...prev,
      checkIn: checkInDate,
      checkOut: checkOutDate
    }));
  }, [checkInDate, checkOutDate, setTempRoom]);
  
  
  
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    selectRooms();
  }, [selectRooms]);

  const handleCountChange = (index: number, delta: number) => {
    const key = keys[index];
    setCount((prevCount) => ({
      ...prevCount,
      [key]: Math.max((prevCount[key] || 0) + delta, 0), // Ensure count does not go below 0
    }));
  };

  const handleBook = (type: string) => {
    let occupantsCount = 0;
    switch (type) {
      case "VIP Lounge":
        occupantsCount = count.count1;
        setNumberOfPeople(count.count1);
        break;
      case "Executive Lounge":
        occupantsCount = count.count2;
        setNumberOfPeople(79);
        break;
      case "Single Occupancy":
        occupantsCount = count.count3;
        setNumberOfPeople(count.count3);
        break;
      case "Standard Double":
        occupantsCount = count.count4;
        setNumberOfPeople(count.count4);
        break;
    }
    const selectedRoom = rooms.find(room => room.roomType.accType === type && room.checkIn === null);
    if (selectedRoom) {
      setTempRoom((prev) => ({
        ...prev,
        id: selectedRoom.id.toString(), // Ensure `id` is a string
        roomType: selectedRoom.roomType as unknown as string, // Ensure it matches the type expected in TempRoom
        checkIn: checkInDate, // Check-in should be a Date or null
        checkOut: checkOutDate, // Check-out should be a Date or null
        number: occupantsCount // Number should be a number or null
      }));
    } else {
      console.log("No available room of type:", type);
    }
    
    navigate('/booking');
    
  };

  return (
    <main className={roomStyle.roomsAndSuites}>
      <div className={roomStyle.roomsAndSuitesContainer}>
        <header>
          <div className={roomStyle.accType}>
            <button
              style={{ position: 'relative' }}
              ref={buttonRef}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <label htmlFor="accommodationType">
                {screenWidth > 590 ? 'Accommodation type' : 'Room type'}
              </label>
              <KeyboardArrowDown id="accommodationType" />
              {isDropdownOpen && <DropDownMenu dropdownRef={dropdownRef} />}
            </button>
          </div>
          <div className={roomStyle.bookDate}>
            <button
              style={{ position: 'relative' }}
              ref={checkInRef}
              onClick={() => setIsCheckInOpen(!isCheckInOpen)}
            >
              <label htmlFor="checkIn">
                {checkInDate ? checkInDate.toLocaleDateString() : 'Check In'}
              </label>
              <KeyboardArrowDown id="checkIn" />
            </button>
            {isCheckInOpen && (
              <div className={roomStyle.picker} ref={datePickerRef}>
                <MyDatePicker
                  selectedDate={checkInDate}
                  setSelectedDate={setCheckInDate}
                  excludedDates={[]}
                />
              </div>
            )}
            <button
              style={{ position: 'relative' }}
              ref={checkOutRef}
              onClick={() => setIsCheckOutOpen(!isCheckOutOpen)}
            >
              <label htmlFor="checkOut">
                {checkOutDate ? checkOutDate.toLocaleDateString() : 'Check Out'}
              </label>
              <KeyboardArrowDown id="checkOut" />
            </button>
            {isCheckOutOpen && (
              <div className={roomStyle.picker} style={{ right: 0 }} ref={datePickerRef}>
                <MyDatePicker
                  selectedDate={checkOutDate}
                  setSelectedDate={setCheckOutDate}
                  excludedDates={checkInDate ? [checkInDate] : []}
                />
              </div>
            )}
          </div>
        </header>
        <div id="roomprices" className={roomStyle.roomsContainer}>
          {uniqueRooms.map((room) => {
            const key = keys[room.index];
            const currentCount = count[key] || 0;

            return (
              <div id={room.roomType.elementId} className={roomStyle.room} key={room.id}>
                <h2 style={{color: '#B22222'}}>{room.roomType.accType}</h2>
                <div className={roomStyle.roomInfo}>
                  <div className={roomStyle.roomImgContainer}>
                    <img src={room.roomType.img} alt={room.roomType.accType} />
                  </div>
                  <div className={roomStyle.roomDetails}>
                    <div className={roomStyle.section}>
                      <div className={roomStyle.section1}>
                        <div className={roomStyle.category}>
                          <h3 style={{color: '#1C2A48'}}>Features</h3>
                          {Object.entries(room.roomType.features).map(([feature, value]) => (
                            <div className={roomStyle.info} key={feature}>
                              <h4 style={{padding: 0, color: '#666666'}} className={roomStyle.key}>{feature}</h4>
                              <p style={{padding: 0}}>{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className={roomStyle.section2}>
                        <div className={roomStyle.category}>
                          <h3 style={{color: '#1C2A48'}}>Additional Services</h3>
                          {Object.entries(room.roomType.additionalServices).map(([service, description]) => (
                            <div className={roomStyle.info} key={service}>
                              <h4 style={{padding: 0, color: '#666666'}} className={roomStyle.key}>{service}</h4>
                              <p style={{padding: 0}}>{description}</p>
                            </div>
                          ))}
                        </div>
                        <div className={roomStyle.category}>
                          <h3 style={{color: '#1C2A48'}}>Pricing</h3>
                          <h4>{room.roomType.pricing}</h4>
                        </div>
                      </div>
                    </div>
                    <div className={roomStyle.btns}>
                      <div className={roomStyle.addRoom}>
                        <button onClick={() => handleCountChange(room.index, 1)}>
                          <Add style={{ backgroundColor: '#B22222', color: '#FFFFFF' }} />
                        </button>
                        <button style={{ backgroundColor: '#B22222', color: '#FFFFFF', outline: 'none' }}>
                          {currentCount}
                        </button>
                        <button
                          onClick={() => handleCountChange(room.index, -1)}
                          disabled={currentCount === 0}
                        >
                          <Remove style={{ backgroundColor: 'B22222', color: '#FFFFFF' }} />
                        </button>
                      </div>
                      <button className={roomStyle.book} onClick={() => handleBook(room.roomType.accType)}>Book</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default RoomsAndSuites;
