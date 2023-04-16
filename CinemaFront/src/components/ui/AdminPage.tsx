import Nav from 'react-bootstrap/Nav';

function AdminPage() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home" className='bg-black'>
      <Nav.Item>
      <Nav.Link href="/admin/cinema">Кінотеатри</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/admin/seansemanagement">Сеанси</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/admin/moviemanagement">Фільми</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/admin/users">Користувачі</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default AdminPage;
  
  