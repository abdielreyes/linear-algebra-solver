import React from 'react'
import { Button, Col, Container, Form} from 'react-bootstrap'

const Crear_ejercicio = (props) => {

    return(
        <React.Fragment>
            <h2>Crear ejercicio</h2>
            <Container fluid className="px-5">
                <Form className="mt-3">
                    <Form.Group>
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control name="titulo" type="text" placeholder="Titulo" required onChange={props.onChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control name="descripcion" type="text" placeholder="Descripción" required onChange={props.onChange}/>
                    </Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Tema</Form.Label>
                                <Form.Control name="id_tema" as="select" required onChange={props.onChange}>
                                    <option>Vectores</option>
                                    <option>Matrices</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Subtema</Form.Label>
                                <Form.Control name="id_subtema" as="select" required onChange={props.onChange}>
                                    <option>Suma</option>
                                    <option>Resta</option>
                                    <option>Multiplicación</option>
                                    <option>División</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Group>
                        <Form.File name="imagen" label="Imágen del ejercicio" required onChange={props.onChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.File name="a" label="Respuesta A)" required onChange={props.onChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.File name="b" label="Respuesta B)" required onChange={props.onChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.File name="c" label="Respuesta C)" required onChange={props.onChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.File name="d" label="Respuesta D)" required onChange={props.onChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Respuesta correcta</Form.Label>
                        <Form.Control name="respuesta" type="text" placeholder="Respuesta correcta" required onChange={props.onChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" onClick={props.onClick}>Crear</Button>
                    </Form.Group>
                </Form>
            </Container>
        </React.Fragment>
    )

}

export default Crear_ejercicio