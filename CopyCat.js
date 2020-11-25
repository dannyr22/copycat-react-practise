import React from 'react';
import {styles} from '../styles';
import {PropTypes} from 'prop-types';


const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCat extends React.Component {
   
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape;
    const value = this.props.value;
    const handleChange = this.props.handleChange;
    const name = this.props.name;
 
    
    return (
      <div style={styles.divStyles}>
        <h1 style={{paddingBottom: 80}}>Copy Cat {name || "Tom"}</h1>
        <input type="text" value={value} onChange={handleChange}
        />
        <img 
        style={styles.imgStyles}
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
        <p>{copying && value}</p>
      </div>
    );
  };
};

CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  toggleTape: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string
}

