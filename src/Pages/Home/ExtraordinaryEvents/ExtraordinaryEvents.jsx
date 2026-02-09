import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styles from "./Calender.module.css";
import { useNavigate } from 'react-router';

const eventData = {
  '2026-02-09': { title: 'Annual Cultural Fest', path: '/events/cultural' },
  '2026-02-12': { title: 'Tech Symposium 2026', path: '/events/tech' },
  '2026-02-20': { title: 'Alumni Reunion', path: '/events/alumni' },
};

export default function RecentEvents() {
  const [hoveredTitle, setHoveredTitle] = useState("Select a date");
  const navigate = useNavigate();

  const handleDateClick = (date) => {
    const dateStr = date.toISOString().split('T')[0];
    if (eventData[dateStr]) {
      navigate(eventData[dateStr].path);
    }
  };

  // Ekhane tile er mouse enter detect kora hochche
  const onHover = (date) => {
    const d = date.toISOString().split('T')[0];
    if (eventData[d]) {
      setHoveredTitle(eventData[d].title);
    } else {
      setHoveredTitle("Select a date");
    }
  };

  return (
   
    <div className={styles.container}>
      <h2 className={styles.title}>RECENT EVENTS</h2>
      
      <div className={styles.eventCard}>
        {/* Banner Side */}
        <div className={styles.bannerSide}>
          <img src="/five.webp" alt="Recent Event" className={styles.bannerImg} />
          <div className={styles.hoverInfo}>
            <p className="text-xs uppercase text-gray-400">Event Info:</p>
            <h3 className="text-xl font-bold text-green-700">{hoveredTitle}</h3>
          </div>
        </div>

        {/* Calendar Side */}
        <div className={styles.calendarSide}>
          <div className={styles.calendarWrapper}>
            <Calendar
              onClickDay={handleDateClick}
              calendarType="gregory"
              prev2Label={null}
              next2Label={null}
              tileClassName={({ date }) => {
                const d = date.toISOString().split('T')[0];
                let classes = styles.tileBase;
                if (eventData[d]) classes += ` ${styles.highlightedTile}`;
                return classes;
              }}
              tileContent={({ date }) => {
                const d = date.toISOString().split('T')[0];
                return (
                  <div 
                    className={styles.invisibleHoverLayer}
                    onMouseEnter={() => onHover(date)}
                    onMouseLeave={() => setHoveredTitle("Select a date")}
                  ></div>
                );
              }}
            />
          </div>
          <div className={styles.footer}>February 2026</div>
        </div>
      </div>

      {/* View All Events Button */}
      <div className={styles.viewAllWrapper}>
        <button 
          onClick={() => navigate('/events')} 
          className={styles.viewAllBtn}
        >
          View All Events {">>"}
        </button>
      </div>
    </div>
  );


  
}