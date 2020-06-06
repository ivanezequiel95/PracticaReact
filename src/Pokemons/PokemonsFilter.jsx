import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PokemonsFilter = (props) => {
    
    const { onSubmit } = props

    const [inputs, setInputs] = useState({
        numero: '',
        nombre: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputs);
    }

    return (
        <div className="w-50">
            <Form>
                <Form.Group controlid="numero">
                    <Form.Label>Número</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Numero de Pokemon"
                        name="numero"
                        value={inputs.numero}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlid="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre de Pokemon"
                        name="nombre"
                        value={inputs.nombre}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button type="submit" onClick={handleSubmit}>
                    Buscar
                </Button>
            </Form>
        </div>
    )
}

PokemonsFilter.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default PokemonsFilter