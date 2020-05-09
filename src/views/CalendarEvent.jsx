import React, { Component } from "react";
import { Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import { 
Card,
CardHeader,
CardBody,
CardTitle,
Form,
Row,
Col } from "reactstrap"; 

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);


class App extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "Visita Técnica"
      }
    ]
  };

  render() {
    return (
      <> 
      <div className="content py-1">
      <Row className="justify-content-md-center py-2">
          <Col md="12">
              <Card className="card-user">
                <CardHeader>
                     <CardTitle tag="h5">Agenda - Evento</CardTitle>
                </CardHeader>
                <CardBody>
                    <Form>
                    <div className="App">
                        <Calendar
                        localizer={localizer}
                        defaultDate={new Date()}
                        defaultView="month"
                        events={this.state.events}
                        style={{ height: "70vh" }}
                        />
                    </div>
                    </Form>
                </CardBody>
              </Card>
          </Col>
      </Row> 
      </div>
      </>
    );
  }
}

export default App;