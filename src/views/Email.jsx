import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { 
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Button,
    ButtonGroup,
    Col } from "reactstrap"; 


   
class Email extends Component {
        render() {
          return (
              <div className="content py-5">
              <Row className="justify-content-md-center py-1">
                  <Col md="12">
                      <Card className="card-user">
                        <CardHeader>
                            <CardTitle className="text-center" tag="h5"> 
                            <Button className="btn-round btn-icon mt-1 shadow-sm" color="secondary" size="sm">
                            <i className="nc-icon nc-simple-add"/>
                            </Button>
                            &nbsp;Novo email
                            </CardTitle>
                        </CardHeader>
                          <CardBody>
                            <Form>
                            <Row>
                                <Col className="pr-3" md="6">
                                    <FormGroup>
                                    <label>De</label>
                                    <Input
                                        placeholder="Email"
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                
                                <Col className="pl-3" md="6">
                                    <FormGroup>
                                    <label> Para</label>
                                    <Input placeholder="Email" type="text"/>
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col className="pr-3" md="12">
                                    <FormGroup>
                                    <label>Assunto</label>
                                    <Input
                                        placeholder="Assunto"
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                </Row>
                            <Editor
                                wrapperClassName="wrapper-class"
                                editorClassName="editor-class"
                                toolbarClassName="toolbar-class"
                                editorClassName="demo-editor"
                                localization={{
                                    locale: 'pt',
                                }}
                            />
                            </Form>
                          </CardBody>
                      </Card>
                  </Col>
              </Row>
            
          </div>
          );
        }
      }
      
     

 export default Email;

