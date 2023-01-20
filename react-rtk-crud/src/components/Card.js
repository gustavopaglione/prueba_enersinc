import {Button, Table} from "antd";

function Card({ tipo_doc, documento, nombre, apellido, hobbie}) {
  
  const dataSource = [
    {
      tipo_doc: {tipo_doc},
      documento: {documento},
      nombre: {nombre},
      apellido: {apellido},
      hobbie: {hobbie},
    },
  ];
  
  const columns = [
    {
      title: 'tipo_doc',
      dataIndex: 'tipo_doc',
      key: 'tipo_doc',
    },
    {
      title: 'documento',
      dataIndex: 'documento',
      key: 'documento',
    },
    {
      title: 'nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'apellido',
      dataIndex: 'apellido',
      key: 'apellido',
    },
    {
      title: 'hobbie',
      dataIndex: 'hobbie',
      key: 'hobbie',
    },
    {
      title: 'acciones',
      dataIndex: 'acciones',
      key: 'acciones',
      render: fila => <> <Button type="primary"> Editar </Button> {"    "} <Button type="primary" danger> Eliminar </Button></> 
    },
  ];
    
    
    return (
<div>
  
      <br/><br/>
      <Table dataSource={dataSource} columns={columns} />;
      </div>
    );
  }
 export default Card;