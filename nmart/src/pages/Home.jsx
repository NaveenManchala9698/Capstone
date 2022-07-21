import React from "react";

const Home = ({ handleLogout, user }) => {
  return (
    <>
      <section className="hero">
        <nav>
          <h2>Welcome</h2>
          <div>
            <button onClick={handleLogout}>Log Out</button>
            <span>{user?.email}</span>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Home;
