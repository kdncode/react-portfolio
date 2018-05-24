import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
		{/* Uses a header that scrolls with the text, rather than staying locked at the top */}
		<div className="demo-big-content">
			<Layout>
				<Header className="header-color" title="My Portfolio" scroll>
					<Navigation className="navigation">
						<Link to='/projects'>Projects</Link>
						<Link to='/resume'>Resume</Link>
						<Link to='/about'>About Me</Link>
						<Link to='/contact'>Contact</Link>
					</Navigation>
				</Header>
				<Drawer title="Title">
					<Navigation>
						<Link to='/projects'>Projects</Link>
						<Link to='/resume'>Resume</Link>
						<Link to='/about'>About Me</Link>
						<Link to='/contact'>Contact</Link>
					</Navigation>
				</Drawer>
				<Content>
					<div className="page-content" />
					<Main />
				</Content>
				<Footer />
			</Layout>
		</div>
      </div>
    );
  }
}

export default App;
