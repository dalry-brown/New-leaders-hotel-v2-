import { create } from 'zustand';
import viplounge from '../assets/viplounge.png';
import executiveLounge from '../assets/executiveLounge.png';
import standarddouble from '../assets/standarddouble.png';
import singleOccupancy from '../assets/singleoccupancy.png';

// Dropdown Store
interface DropdownState {
  isOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
}

export const useDropdownStore = create<DropdownState>((set) => ({
  isOpen: false,
  toggleDropdown: () => set((state) => ({ isOpen: !state.isOpen })),
  closeDropdown: () => set({ isOpen: false }),
}));

export const useDateDropdownStore = create<DropdownState>((set) => ({
  isOpen: false,
  toggleDropdown: () => set((state) => ({ isOpen: !state.isOpen })),
  closeDropdown: () => set({ isOpen: false }),
}));

// Page Store
interface PageState {
  homeSelected: boolean;
  aboutSelected: boolean;
  roomsSelected: boolean;
  contactSelected: boolean;
  bookingSelected: boolean;
  selectHome: () => void;
  selectAbout: () => void;
  selectRooms: () => void;
  selectContact: () => void;
  selectBooking: () => void;
}

export const usePageStore = create<PageState>((set) => ({
  homeSelected: false,
  aboutSelected: false,
  roomsSelected: false,
  contactSelected: false,
  bookingSelected: false,
  selectHome: () => set({
    homeSelected: true,
    aboutSelected: false,
    roomsSelected: false,
    contactSelected: false,
    bookingSelected: false,
  }),
  selectAbout: () => set({
    homeSelected: false,
    aboutSelected: true,
    roomsSelected: false,
    contactSelected: false,
    bookingSelected: false,
  }),
  selectRooms: () => set({
    homeSelected: false,
    aboutSelected: false,
    roomsSelected: true,
    contactSelected: false,
    bookingSelected: false,
  }),
  selectContact: () => set({
    homeSelected: false,
    aboutSelected: false,
    roomsSelected: false,
    contactSelected: true,
    bookingSelected: false,
  }),
  selectBooking: () => set({
    homeSelected: false,
    aboutSelected: false,
    roomsSelected: false,
    contactSelected: false,
    bookingSelected: true,
  }),
}));

// Screen Size Store
interface ScreenSizeState {
  screenWidth: number;
  setScreenWidth: (width: number) => void;
}

export const useScreenSizeStore = create<ScreenSizeState>((set) => ({
  screenWidth: window.innerWidth,
  setScreenWidth: (width: number) => set({ screenWidth: width }),
}));


interface RoomType {
  id: number;
  img: string;
  accType: string;
  features: {
    bed: string;
    size: string;
    occupancy: number;
    bathroom: string;
    amenities: string;
  };
  additionalServices: {
    room: string;
    service: string;
  };
  pricing: string;
  elementId: string;
}

// Room Details
const vipLoungeRoom:RoomType = {
  id: 1,
  img: viplounge,
  accType: 'VIP Lounge',
  features: {
    bed: 'King-size bed',
    size: '400 sq ft',
    occupancy: 2,
    bathroom: 'En-suite bathroom with rain shower and bathtub',
    amenities: 'High speed Wi-Fi, flat-screen TV, sitting room, work desk, air condition',
  },
  additionalServices: {
    room: '24/7 room service available',
    service: 'Personalized concierge service',
  },
  pricing: 'GHC 3000/Night',
  elementId: 'vip',
};

const executiveLoungeRoom:RoomType = {
  id: 2,
  img: executiveLounge,
  accType: 'Executive Lounge',
  features: {
    bed: 'King-size bed',
    size: '400 sq ft',
    occupancy: 2,
    bathroom: 'En-suite bathroom with rain shower and bathtub',
    amenities: 'High speed Wi-Fi, flat-screen TV, sitting room, work desk, air condition',
  },
  additionalServices: {
    room: '24/7 room service available',
    service: 'Personalized concierge service',
  },
  pricing: 'GHC 3000/Night',
  elementId: 'executive',
};

const standardDoubleRoom:RoomType = {
  id: 3,
  img: standarddouble,
  accType: 'Standard Double',
  features: {
    bed: 'King-size bed',
    size: '400 sq ft',
    occupancy: 2,
    bathroom: 'En-suite bathroom with rain shower and bathtub',
    amenities: 'High speed Wi-Fi, flat-screen TV, sitting room, work desk, air condition',
  },
  additionalServices: {
    room: '24/7 room service available',
    service: 'cathering service',
  },
  pricing: 'GHC 3000/Night',
  elementId: 'double',
};

const singleOccupancyRoom:RoomType ={
  id: 4,
  img: singleOccupancy,
  accType: 'Single Occupancy',
  features: {
    bed: 'King-size bed',
    size: '400 sq ft',
    occupancy: 2,
    bathroom: 'En-suite bathroom with rain shower and bathtub',
    amenities: 'High speed Wi-Fi, flat-screen TV, sitting room, work desk, air condition',
  },
  additionalServices: {
    room: '24/7 room service available',
    service: 'Personalized concierge service',
  },
  pricing: 'GHC 3000/Night',
  elementId: 'single',
};

// Room Store


interface Room {
  id: number;
  roomType: RoomType;
  checkIn: number|null;
  checkOut: number|null;
  number: number;
  index: number;
}

interface RoomState {
  rooms: Room[];
  uniqueRooms: Room[];
  setVipRoom: () => void;
  setExecutiveRoom: () => void;
  setSingleRoom: () => void;
  setDoubleRoom: () => void;
  resetRooms: () => void;
}

export const useRoomStore = create<RoomState>(
  (set) => {
  const rooms: Room[] = [
    {
      id: 1,
      roomType: vipLoungeRoom,
      checkIn: null,
      checkOut: null,
      number: 1,
      index: 0
    },
    {
      id: 2,
      roomType: executiveLoungeRoom,
      checkIn: null,
      checkOut: null,
      number: 1,
      index: 1
    },
    {
      id: 3,
      roomType: vipLoungeRoom,
      checkIn: null,
      checkOut: null,
      number: 1,
      index: 0
    },
    {
      id: 4,
      roomType: vipLoungeRoom,
      checkIn: null,
      checkOut: null,
      number: 1,
      index: 0
    },
    {
      id: 5,
      roomType: executiveLoungeRoom,
      checkIn: null,
      checkOut: null,
      number: 1,
      index: 1
    },
    {
      id: 6,
      roomType: singleOccupancyRoom,
      checkIn: null,
      checkOut: null,
      number: 1,
      index: 2
    },
    {
      id: 7,
      roomType: singleOccupancyRoom,
      checkIn: null,
      checkOut: null,
      number: 1,
      index: 2
    },
    {
      id: 8,
      roomType: standardDoubleRoom,
      checkIn: null,
      checkOut: null,
      number: 1,
      index: 3
    },
  ];

  const initialUniqueRooms: Room[] = [];
  const requiredTypes:string[] = ['VIP Lounge', 'Executive Lounge', 'Standard Double', 'Single Occupancy']
  
    
  // Present one of each of the types in requiredtypes
    rooms.forEach((room) => {
    if (requiredTypes.includes(room.roomType.accType) && !initialUniqueRooms.some(initRoom => initRoom.roomType.accType === room.roomType.accType)) {
      initialUniqueRooms.push(room);
    }
  });

  const setFilteredRooms = (roomType: RoomType) => {
    const filteredRooms = rooms.filter((room) => room.roomType.accType === roomType.accType);
    set({
      uniqueRooms: filteredRooms.length > 0 ? [filteredRooms[0]] : [],
    });
  };

  return {
    rooms,
    uniqueRooms: initialUniqueRooms,
    setVipRoom: () => setFilteredRooms(vipLoungeRoom),
    setExecutiveRoom: () => setFilteredRooms(executiveLoungeRoom),
    setSingleRoom: () => setFilteredRooms(singleOccupancyRoom),
    setDoubleRoom: () => setFilteredRooms(standardDoubleRoom),
    resetRooms: () => set({ uniqueRooms: initialUniqueRooms }),
  };
});

// export const useTempRoom = create((set) =>( {

// }))

// export const useRoomSettingsStore = create((set) => ({
//   roomType: '',
//   tempRoom: {
//     id: '',
//     roomType: null,
//     checkIn: null,
//     checkOut: null,
//     number: null,
//   },
//   setTempRoom: (room) => set({ tempRoom: room }),
//   setVipRoomType: () => set({roomType: 'VIP Lounge'}),
//   setExecutiveRoomType: () => set({roomType: 'Executive Lounge'}),
//   setDoubleRoomType: () => set({roomType: 'Standard Double'}),
//   setSingleRoomType: () => set({ roomType: 'Single Occupancy' }),
//   numberOfPeople: 0,
//   setNumberOfPeople: (newNumber) => set({numberOfPeople: newNumber}),
//   increment: () => set(state => ({ numberOfPeople: state.numberOfPeople + 1 })),
//   decrement: () => set(state => ({ numberOfPeople: state.numberOfPeople - 1 }))
//   // increment: () => set((state))
//   // increment: () => set((state: { numberOfPeople: number; }) => ({numberOfPeople: state.numberOfPeople + 1})),
// //   decrement: set((state: { numberOfPeople: number; }) => ({numberOfPeople: state.numberOfPeople - 1}))
//   // 
// }))

interface TempRoom {
  id: string | null;
  roomType: string | null;
  checkIn: Date | null;
  checkOut: Date | null;
  number: number | null;
}

interface RoomSettingsStore {
  roomType: string;
  tempRoom: TempRoom;
  // setTempRoom: (room: TempRoom) => void;
  setTempRoom: (updater: (prev: TempRoom) => TempRoom) => void;
  setVipRoomType: () => void;
  setExecutiveRoomType: () => void;
  setDoubleRoomType: () => void;
  setSingleRoomType: () => void;
  numberOfPeople: number;
  setNumberOfPeople: (newNumber: number) => void;
  increment: () => void;
  decrement: () => void;
}

// Create the Zustand store with typed state and actions
export const useRoomSettingsStore = create<RoomSettingsStore>((set) => ({
  roomType: '',
  tempRoom: {
    id: '',
    roomType: null,
    checkIn: null,
    checkOut: null,
    number: null,
  },
  // setTempRoom: (room: TempRoom) => set({ tempRoom: room }),
  setTempRoom: (updater) => set((state) => ({ tempRoom: updater(state.tempRoom) })),
  setVipRoomType: () => set({ roomType: 'VIP Lounge' }),
  setExecutiveRoomType: () => set({ roomType: 'Executive Lounge' }),
  setDoubleRoomType: () => set({ roomType: 'Standard Double' }),
  setSingleRoomType: () => set({ roomType: 'Single Occupancy' }),
  numberOfPeople: 0,
  setNumberOfPeople: (newNumber: number) => set({ numberOfPeople: newNumber }),
  increment: () => set((state) => ({ numberOfPeople: state.numberOfPeople + 1 })),
  decrement: () => set((state) => ({ numberOfPeople: state.numberOfPeople - 1 })),
}));