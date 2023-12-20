import React, { useEffect } from 'react'

const Admin = () => {
    useEffect(() => {
        fetch("", {
          method: "GET",
          headers: {
            'Accept': "application/json",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((data) => {

          })
          .catch((error) => {
            console.error("Error fetching Header data:", error);
          });
      }, []);
  return (
    <div>Admin</div>
  )
}

export default Admin;