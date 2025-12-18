import Section2 from "./Components/section2/section2";
import Section1 from "./Components/Section1/section1";
const App = () => {
  const users = [
    {color: 'black',
      img: "https://media.istockphoto.com/id/1457878227/photo/business-people-having-a-meeting-in-a-tech-company.jpg?s=612x612&w=is&k=20&c=U7EBdufdKi9hTKnKxDexCB-0nYZ4kN0tSZxvpCM1yOI=",
      intro: "",
      tag: "Consistent",
    },
    {color: 'purple',
      img: "https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg",
      intro: "",
      tag: "Focused",
    },
    {color: 'violet',
      img: "https://images.pexels.com/photos/997512/pexels-photo-997512.jpeg",
      intro: "",
      tag: "Iconic",
    },
    {color: 'indigo',
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "",
      tag: "Satisfied",
    },
    {color: 'pink',
      img: "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "",
      tag: "Underserved",
    },
    {color: 'red',
      img: "https://media.istockphoto.com/id/2193065392/photo/young-business-professionals-collaborating-in-a-modern-meeting-room.jpg?s=2048x2048&w=is&k=20&c=VvLoc7cQp1KdTh00AWRVV87NGcK0EUubAQ-sAToQAwI=",
      intro: "",
      tag: "Underbanked",
    },
    {color: 'blue',
      img: "https://images.pexels.com/photos/7698804/pexels-photo-7698804.jpeg",
      intro: "",
      tag: "sober",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
