import React from 'react';
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'
import coronaImage from './images/image3.png';
import {Button} from "@material-ui/core";



class App extends React.Component {

    state = {
        data:{},
        country:'',

    }
   async componentDidMount(){
        const fetchdata= await fetchData();
       
        this.setState({data:fetchdata});
    }

    handleCountryChange = async (country) =>{

        const fetchdata= await fetchData(country);
        this.setState ({ data: fetchdata , country: country });
    
        
    }
    render(){
        const { data,country } = this.state;

        return(
            <div className={styles.container}>
             <img className={styles.image} src={coronaImage} alt="COVID-19"/>
            <Cards data={data } />
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart data={data} country={country}/>
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              Created by "Ghazal Aroosa"
              </p>
              <div> 
          <Button
            style={{ backgroundColor: "#212344" }}
            className={styles.btnAboutMe}
            variant="contained"
            color="primary"
            target="_blank"
            href="https://github.com/ghazal-aroosa"
          >github.com/ghazal-aroosa
            
          </Button>
          <Button
            style={{ backgroundColor: "#4A148C" }}
            className={styles.btnAboutMe}
            variant="contained"
            color="primary"
            target="_blank"
            href ="mailto:ghazal.aroosa@gmail.com"
          >  ghazal.aroosa@gmail.com
          </Button>
        </div>
            
           
            </div>
        )
    }
}
export default App;