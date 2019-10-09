import React, { Component } from 'react';
import './App.css';
import ContactCard from './ContactCard';

export default class App extends Component{
  render() {
    return (
      <div>
          <ContactCard 
            img="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/37946345_1829350910516890_2922713334983688192_n.jpg?_nc_cat=110&_nc_oc=AQmbHmFDiWcpq99Ctg83mESooa72Ta5KjC7LF0zEqqUwrYD2HeYqxAv3Bel7j0RIVSw&_nc_ht=scontent-lax3-2.xx&oh=4978355827ba4b41f00a7127b6f71072&oe=5DEF18B6"
            firstname="Leigh"
            lastname="Rubin"
            age={21}
            email="leighrub@usc.edu"
            twitter="https://twitter.com/leighrub"
            facebook="https://www.facebook.com/leigh.rubin.7"
            linkedin="https://www.linkedin.com/in/leigharubin/"
          />
          <br/>
          <h4>How developers would use ContactCard + Motivation for ContactCard</h4>
          <p>
            Developers could be able to use ContactCard for any application or page that shows people
            on a page and wants to show more information about them (such as email address, an image,
            age, and social media link). They can use the component by simply inputting the urls and
            strings and the ContactCard will do the formatting and linking.
          </p>
          <br/>
          <h4>How is ContactCard reusable?</h4>
          <p>
            ContactCard allows many inputs, allowing for resue for different people. A developer can 
            easily pull a database of people from an API and generate ContactCards for each person.
          </p>
          <br/>
          <h4>Name of component</h4>
          <p>
            The component is named 'ContactCard' because the card displays a person and gives different 
            ways to contact that person. It is a simple yet descriptive name.
          </p>
          <br/>
          <h4>Name of props</h4>
          <p>
            Each prop is a simple string that tells the user exactly what to input. The type of input 
            can be easily inferred from each prop name.
          </p>
      </div>
    );
  }
}