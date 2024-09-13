import teamStyle from '../../styles/component-styles/about-components/team.module.css'
import member1 from '../../assets/member1.png'
import member2 from '../../assets/member2.png'
import member3 from '../../assets/member3.png'
import member4 from '../../assets/member4.png'
import member5 from '../../assets/member5.png'
import member6 from '../../assets/member6.png'
import member7 from '../../assets/member7.png'
import member8 from '../../assets/member8.png'

const Team = () => {

    const members = [
        {
            id: 1,
            image: member1,
            name: "Joseph Appiah",
            role: "CTO"
        },
        {
            id: 2,
            image: member2,
            name: "Bernard Korangten",
            role: "Head of Design"
        },
        {
            id: 3,
            image: member3,
            name: "Eunice Baidu",
            role: "Head of Design"
        },
        {
            id: 4,
            image: member4,
            name: "Celestina Kyeremanteng",
            role: "Receptionist"
        },
        {
            id: 5,
            image: member5,
            name: "Kojo Antwi",
            role: "Receptionist"
        },
        {
            id: 6,
            image: member6,
            name: "Elliot Sampson",
            role: "Hotel’s doctor"
        },
        {
            id: 7,
            image: member7,
            name: "Mabel Coleman",
            role: "Customer support"
        },
        {
            id: 8,
            image: member8,
            name: "Patricia Boamah",
            role: "Chief Financial Officer"
        },
    ]

  return (
    <section className={teamStyle.team}>
          <div className={teamStyle.teamContainer}>
              {
                  members.map((member) => (
                    <div className={teamStyle.teamMember} key={member.id}>
                        <img src={member.image} alt="" />
                        <div className={teamStyle.about}>
                              <p id='name'>{ member.name }</p>
                              <label htmlFor="name">{ member.role }</label>
                        </div>
                    </div>
                  ))
              }
          </div>
    </section>
  )
}

export default Team
