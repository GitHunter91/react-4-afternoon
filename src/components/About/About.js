import React, { Component } from 'react';
import {Link,Switch,Route} from 'react-router-dom';
import History from '../History/History';
import Contact from '../Contact/Contact';


export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link className='subnav_links' to="/about"><h3>About</h3></Link>
          <Link className='subnav_links' to="/about/history"><h3>History</h3></Link>
          <Link className='subnav_links' to="/about/contact"><h3>Contact</h3></Link>
        </div>
        <div className='box'>
        <Switch>
          <Route path="/about/history"  component={History} />
          <Route path="/about/contact" component={Contact}/>
          <Route exact path="/about" render= {()=>
              <div><h1>About WestSide University</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta officiis eius expedita nihil in. Delectus distinctio necessitatibus natus perferendis tempora fugit ab voluptatibus veniam mollitia, hic repellendus deleniti facere error?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab at excepturi corporis quia tempora eius officiis, adipisci beatae aspernatur distinctio et atque iste in iure vero dicta molestias fugiat?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, doloribus, nemo id iusto at labore magni et a, nam ipsam modi! Hic tempora iusto, voluptate quod consequuntur voluptas et quae.
              </p>
              </div>
           } />
        </Switch>
        </div>
      </div>
    )
  }
}