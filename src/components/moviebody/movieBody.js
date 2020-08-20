import React from 'react';
import { connect } from 'react-redux';
import { Button, Table, Form, FormGroup, Row, Label, Input, FormText, Col, Container } from 'reactstrap';
import './_movieBody.scss';
import { bindActionCreators } from 'redux';
import * as addName from '../../redux/actions/addMovieName';


const MovieBody = (props) => {
    return (
        < div className={'tableContainer'}>
            <Container>
                <Table className={'tableContainer__content'}>
                    <tbody>
                        {
                            props.filmReducers == 'null' ? <tr><td><p className={'tableContainer__notFound'}>Movie Not Found</p></td></tr> : props.filmReducers.map(data => (
                                data.map(result => (
                                    <tr>
                                        <td>
                                            <span>MOVIENAME</span>:<h1>{result[0].valueName} </h1>
                                        </td>
                                        <td>
                                            <span> Movie Director</span>:<h1 className={'director'}>{result[0].valueDirector}</h1>
                                        </td>
                                        <td>
                                            <span> Movie Poster</span>:<h1>{<img className={'tableContainer__img'} src={result[0].valuePoster} />}</h1>
                                        </td>
                                        <td>
                                            <Button onClick={props.actions.deleteMovie} color="danger">Delete</Button>{' '}
                                        </td>
                                    </tr>
                                ))

                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </div >
    );
}


function mapStateToProps(state) {

    return {
        filmReducers: state.filmReducers
    }

}


function mapDispatchToProps(dispatch) {

    return {
        actions: {
            deleteMovie: bindActionCreators(addName.deleteMovie, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieBody);