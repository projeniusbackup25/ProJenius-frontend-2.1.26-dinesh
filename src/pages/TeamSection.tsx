import React, { useEffect } from 'react';
import { FaInstagram, FaYoutube, FaWhatsapp,FaEnvelope } from 'react-icons/fa';
import './TeamSection.css';
declare function require(path: string): any;


const teamMembers = [
  {
    id: 'TM1',
    name: 'Karthick Ganesh M',
    role: 'Founder & CEO',
    quote: 'The dreamer who turned "what if" into "what’s next."',
    icons: [
      <a href="mailto:teamprojenius@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      
      
      
    ],
    image: require('../img/Team_members/Karthiganesh.jpeg'),
  },
  {
    id: 'TM2',
    name: 'Harshini M',
    role: 'Co-Founder & Embedded Engineer',
    quote: 'The unseen brain powering intelligent machines.',
    icons: [
           <a href="mailto:teamprojenius@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>   ],
    image: require('../img/Team_members/Harshini.jpeg'),
  },
  {
    id: 'TM4',
    name: 'Hariharan S',
    role: 'Full Stack Developer ',
    quote: 'Crafting pixel-perfect web experiences with clean code.',
    icons: [
           <a href="mailto:teamprojenius@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>    ],
    image: require('../img/Team_members/Hariharan.jpeg'),
  },

    {
    id: 'TM5',
    name: 'Abhinanda V',
    role: 'Application Software Developer',
    quote: 'Crafting apps that fit in your palm but power your world.',
    icons: [
           <a href="mailto:teamprojenius@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>    ],
    image: require('../img/Team_members/Abhinanda.jpeg'),
  },


    {
    id: 'TM9',
    name: 'Harini P',
    role: 'UI/UX Developer',
    quote: 'Designing meaningful experiences, not just screens to scroll.',
    icons: [
            <a href="mailto:teamprojenius@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>    ],
    image: require('../img/Team_members/Harini.jpg'),
  },


   {
    id: 'TM10',
    name: 'Abinaya',
    role: 'Data Analyst',
    quote: 'Finding stories in spreadsheets and uncovering truth in trends.',
    icons: [
           <a href="mailto:teamprojenius@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>    ],
    image: require('../img/Team_members/Abinaya.jpeg'),
  },

  {
    id: 'TM3',
    name: 'Kanimozhi B',
    role: 'IoT Engineer',
    quote: 'Making everyday objects talk, think, and act intelligently.',
    icons: [
            <a href="mailto:teamprojenius@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>   ],
    image: require('../img/Team_members/Kanimozhi.jpeg'),
  },
  

   {
    id: 'TM11',
    name: 'Balaji J',
    role: 'Video Editor',
    quote: 'Turning clips into captivating stories, frame by frame.',
    icons: [
           <a href="mailto:teamprojenius@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>   ],
    image: require('../img/Team_members/Balaji.jpeg'),
  },

  {
    id: 'TM6',
    name: 'DineshKarthick S ',
    role: 'Web Developer',
    quote: 'Designing fast, functional, and future-ready websites.',
    icons: [
           <a href="mailto:teamprojenius@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>    ],
    image: require('../img/Team_members/Dinesh.jpeg'),
  },

  {
    id: 'TM8',
    name: 'Malar M',
    role: 'Visual Media Editor',
    quote: 'Editing visuals that speak louder than words.',
    icons: [
           <a href="mailto:teamprojenius@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>   ],
    image: require('../img/Team_members/malar.jpg'),
  },


  {
    id: 'TM7',
    name: 'Athish Pandi J',
    role: 'App Developer',
    quote: 'Building apps that move with the world.',
    icons: [
            <a href="mailto:teamprojenius@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>,
      <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>,
      <a href="https://youtube.com/@projenius-8?si=1TL7QX-uet87koQU" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>,
      <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>    ],
    image: require('../img/Team_members/athish.jpg'),
  },
  

 
 
];

const scrollingTeam = [...teamMembers, ...teamMembers];

const TeamSection = () => {
  useEffect(() => {
    const disableRightClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', disableRightClick);
    return () => document.removeEventListener('contextmenu', disableRightClick);
  }, []);

  return (
    <section className="team-section">
      <h2 className="section-title">Meet the <span className="brand-pro">Pro</span>
            <span className="brand-jenius">Jenius</span> Team</h2>
      <div className="scrolling-wrapper">
        <div className="team-scroll-track">
          {scrollingTeam.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-avatar">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    draggable={false}
                    style={{ userSelect: 'none', pointerEvents: 'none' }}
                  />
                ) : (
                  member.id
                )}
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-quote">"{member.quote}"</p>
              <div className="team-icons">
                {member.icons.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;