import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, Tabs, Tab, Grid, Cell } from 'react-mdl';

class projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab : 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://cdn-images-1.medium.com/max/1280/1*y7JWssYTe4y6Fgmk6SfoKg.png) center no-repeat #46B6AC'}}>React #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://i1.wp.com/www.bolteraho.com/wp-content/uploads/2018/02/REACTjs-cover.jpg?resize=900%2C506) center no-repeat #46B6AC'}}>React #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(https://d2sis3lil8ndrq.cloudfront.net/courses/66f18244-4d0c-49f5-accc-03284ba635e5.png) center no-repeat #46B6AC'}}>React #3</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return <div>Node/Express</div>
        } else if (this.state.activeTab === 2) {
            return <div>TypeScript</div>
        } else if (this.state.activeTab === 3) {
        return (<div>Design</div>) 
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={ (tabId) => this.setState({ activeTab: tabId } ) } ripple>
                    <Tab>React</Tab>
                    <Tab>Node/Express</Tab>
                    <Tab>TypeScript</Tab>
                    <Tab>Design</Tab>
                </Tabs>

                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{ this.toggleCategories() }</div>                      
                        </Cell>
                    </Grid>
                </section>     
            </div>
        );
    }
}

export default projects;