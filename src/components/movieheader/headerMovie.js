import React, { useEffect, useState, useDispatch } from 'react';
import { connect, useSelector } from 'react-redux';
import './_movieHeader.scss';
import { Button, Form, FormGroup, Row, Label, Input, FormText, Col, Container } from 'reactstrap';
import * as actionTypes from '../../redux/actions/actionTypes';
import { bindActionCreators } from 'redux';
import * as addName from '../../redux/actions/addMovieName';

const MovieHeader = (props, dispatch) => {

    const state = useSelector(state => state);

    let [movieName, setMovieName] = useState('null');
    let [movieDirector, setMovieDirector] = useState('null');
    let [moviePoster, setMoviePoster] = useState('null');
    let [submit, setSubmit] = useState('null');

    // let [submitButton, setButton] = useState('null');


    useEffect(function (result) {

        const data = {
            movieName: document.querySelector('.movieName'),

            movieDirector: document.querySelector('.movieDirector'),

            moviePoster: document.querySelector('.moviePoster'),

            submit: document.querySelector('button'),

            // submitButton: document.querySelector('button')
        }

        setMovieName(movieName = data.movieName)

        setMovieDirector(movieDirector = data.movieDirector)

        setMoviePoster(moviePoster = data.moviePoster)

        setSubmit(submit = data.submit)

        // validate form

        submit.onclick = function (event) {

            let warningAfterOnclick = document.querySelector('.tableContainer__notFound');

            let inputs = document.querySelectorAll('form input');


            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].value == "") {
                    inputs[i].classList.add('alert-danger');
                    inputs[i].classList.remove('alert-success');
                    event.preventDefault()
                }
                else {
                    inputs[i].classList.remove('alert-danger');
                    inputs[i].classList.add('alert-success');

                }

            }


            // preventDefult


            let valueName = movieName.value;
            let valueDirector = movieDirector.value;
            let valuePoster = moviePoster.value;

            if (valueName == '' || valueDirector == '' || valuePoster == '') {
                event.preventDefault()
            }else{
                getMovieNameValue()
                event.preventDefault();
            }


        }

        // validate end


    })


    let films = [];

    function getMovieNameValue(event) {

        const dataFilm = {
            'valueName': movieName.value,
            'valueDirector': movieDirector.value,
            'valuePoster': moviePoster.value
        }

        films.push(dataFilm)

        props.actions.sendName(films)


    }




    return (
        < div >
            <div className={"container-fluid"}>
                <div className={'movieHeader'}>
                    <h4 className={'movieHeader__title'}>MOVIE APP</h4>
                    <Container>
                        <Form>
                            <Row>
                                <Col lg='6'>
                                    <div className={'movieHeader__infos'}>
                                        <Label>Movie Name</Label>
                                        <Input type="text" name="MovieName" className={'movieName'} placeholder="Movie Name" />
                                    </div>
                                </Col>
                                <Col lg='6'>
                                    <div className={'movieHeader__infos'}>
                                        <Label>Movie Director</Label>
                                        <Input type="text" name="director" className={'movieDirector'} placeholder="Movie Director" />
                                    </div>
                                </Col>
                                <Col lg='12'>
                                    <div className={'movieHeader__infos'}>
                                        <Label>Movie Director</Label>
                                        <Input type="text" name="director" className={'moviePoster'} placeholder="Poster Link" />
                                    </div>
                                </Col>
                            </Row>
                            <Button type={'submit'} className={'mt-2'}>Submit</Button>
                        </Form>
                    </Container>
                </div>
            </div>
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
            sendName: bindActionCreators(addName.sendName, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieHeader);