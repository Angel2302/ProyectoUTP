
import React from "react";
import{ Card, Button } from "react-bootstrap"

const Docs = () => {

    return (
        <div class='row'>
            <div class='col-auto'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Yannis_kottis_-_gardening_supplies_2008.jpg" />
                    <Card.Body>
                        <Card.Title>Gardening</Card.Title>
                        <Card.Text>
                        Gardening is the art, technique and practice of cultivating gardens.
                        It consists of cultivating, both in an open and closed space (flowerbeds),
                        flowers, trees, vegetables, or vegetables (orchards), either for aesthetics,
                        for taste or for food, and in whose achievement the economic objective is secondary.
                        </Card.Text>
                        <Button variant="success" href="https://www.gardeningknowhow.com/garden-how-to/info">Visit Gardening.knowhow.com</Button>
                    </Card.Body>
                </Card>
               

                
            </div>
            <div class='col auto'>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/7/76/Irrigation_system_%22Perrot%22-sprinkler_and_end_fitting.jpg" />
                    <Card.Body>
                        <Card.Title>Horticulture</Card.Title>
                        <Card.Text>
                        Horticulture is the science, technology and business
                        involved in the production of vegetables for consumption.
                        Horticulture is the technique of growing plants that grow in orchards.
                        The term comes etymologically from the Latin words hortus (‘garden’, ‘garden’, ‘plant’)
                        and culture (‘cultivation’), that is, ‘cultivation in orchards’.
                        </Card.Text>
                        
                        <Button variant="success" href="https://www.gardeningknowhow.com/garden-how-to/info">Visit Gardening.knowhow.com</Button>
                      
                    </Card.Body>
                </Card>
            </div>
            <div class='col-auto'>
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/7/74/Composting_in_the_Escuela_Barreales.jpg" />
                        <Card.Body>
                            <Card.Title>Environmental Sustainability</Card.Title>
                            <Card.Text>
                            Sustainable Gardening means gardening in a smart and eco-friendly way. 
                            It’s all about giving back to mother nature by using organic growing methods so you use fewer 
                            chemicals and adopt greener alternatives when you’re gardening. Food produced in a sustainable 
                            garden is rich in terms of both nutrients and taste!
                            </Card.Text>
                            
                            <Button variant="success" href="https://sustainabilityx.co/15-sustainable-gardening-ideas-b22be80dfc7f">Visit Sustainabilit.co</Button>
                        
                        </Card.Body>
                    </Card>
            </div>
            
            <div class='col-auto'>
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Medicinal_Plants.jpg" />
                        <Card.Body>
                            <Card.Title>The power of Medicinal Plants</Card.Title>
                            <Card.Text className="quoted-text">
                            The medicinal value of many home plants, whose healing virtues have been passed 
                            down from generation to generation among housewives, is again worrying laboratory men. 
                            The highly scientific value of medicinal ingredients that naturopathic sages have been using 
                            profitably since ancient times, has not had frank acceptance due to the belief that preparations 
                            in rudimentary vessels (clay pots) are full of microbes and dirt. 
                            </Card.Text>
                            
                            <Button variant="success" href="https://www.healthline.com/health/most-powerful-medicinal-plants">Visit Healthline.com</Button>
                        
                        </Card.Body>
                    </Card>
            </div>
        </div>
    );
};

export default Docs;