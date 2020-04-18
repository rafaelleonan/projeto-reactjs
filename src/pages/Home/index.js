import React, { Component } from 'react';
import './style.css';
import react from './react.png';
import vue from './vue.png';
import angular from './angular.png';
import electron from './electron.jpg';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Banner from '../../components/shared/Banner';
import Slide from '../../components/shared/Slide';


export default class Home extends Component{
    render(){
        return(
            <main className="content">
                <Container maxWidth="false">
                    <Slide />
                    <Banner />
                    <ul className="list-card">
                        <li>
                            <Card className="card-wd">
                                <CardActionArea>
                                    <CardMedia
                                    className="card-media"
                                    image={react}
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        React JS
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    React é uma biblioteca JavaScript para construção de interfaces de usuário
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                    Compartilhar
                                    </Button>
                                    <Button size="small" color="primary">
                                    Ver mais
                                    </Button>
                                </CardActions>
                            </Card>
                        </li>
                        <li>
                            <Card className="card-wd">
                                <CardActionArea>
                                    <CardMedia
                                    className="card-media"
                                    image={vue}
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Vue JS
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    React é uma biblioteca JavaScript para construção de interfaces de usuário
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                    Compartilhar
                                    </Button>
                                    <Button size="small" color="primary">
                                    Ver mais
                                    </Button>
                                </CardActions>
                            </Card>
                        </li>
                        <li>
                            <Card className="card-wd">
                                <CardActionArea>
                                    <CardMedia
                                    className="card-media"
                                    image={electron}
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Electron JS
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    React é uma biblioteca JavaScript para construção de interfaces de usuário
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                    Compartilhar
                                    </Button>
                                    <Button size="small" color="primary">
                                    Ver mais
                                    </Button>
                                </CardActions>
                            </Card>
                        </li>
                        <li>
                            <Card className="card-wd">
                                <CardActionArea>
                                    <CardMedia
                                    className="card-media"
                                    image={angular}
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Angular JS
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    React é uma biblioteca JavaScript para construção de interfaces de usuário
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                    Compartilhar
                                    </Button>
                                    <Button size="small" color="primary">
                                    Ver mais
                                    </Button>
                                </CardActions>
                            </Card>
                        </li>
                    </ul>
                </Container>
            </main>
        );
    }
}