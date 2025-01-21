function Layout() {
  return (
    <div>
      <div className="menu">
        {menu.map((x) => {
          return <a href="#">{x}</a>;
        })}
      </div>
    </div>
  );
}
export default Layout;
