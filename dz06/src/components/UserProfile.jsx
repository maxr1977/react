import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from '../styles/UserProfile.module.css'

const UserProfile = () => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const fetchUser = async () => {
     setLoading(true);
     try {
       const res = await axios.get("https://randomuser.me/api");
       setUser(res.data.results[0]);
     } catch (error) {
       console.error("Ошибка при загрузке данных пользователя:", error);
     } finally {
       setLoading(false);
     }
   };

   useEffect(() => {
     fetchUser();
   }, []);

   if (loading) return <div className={styles.card}>Loading...</div>;
   return (
     <div className={styles.card}>
       <img className={styles.avatar} src={user.picture.large} alt="User" />
       <h2 className={styles.name}>
         {user.name.first} {user.name.last}
       </h2>
       <p className={styles.email}>Email: {user.email}</p>
       <p className={styles.phone}>Phone: {user.phone}</p>
       <button className={styles.button} onClick={fetchUser}>
         Load New User
       </button>
     </div>
   );
}

export default UserProfile