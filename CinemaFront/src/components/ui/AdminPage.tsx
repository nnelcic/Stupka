import Nav from 'react-bootstrap/Nav';


function AdminPage() {
    return (
      <Nav className=" p-3 bg-black bg-body=010101 text-white border-bottom text-center">
        <Nav.Item>
          <Nav.Link href="/admin/cinema">Кінотеатри</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/seanses">Сеанси</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/movies">Фільми</Nav.Link>
        </Nav.Item>        
        <Nav.Item>
          <Nav.Link href="/admin/users">Користувачі</Nav.Link>
        </Nav.Item> 
      </Nav>
    );
  }
  
  export default AdminPage;
