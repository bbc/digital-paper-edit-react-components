import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faPen
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-css-only/css/bootstrap.css';

const SimpleCard = (props) => {
  const handleDeleteText = () => {
    const confirmDeleteText = "Click OK if you wish to delete or cancel if you don't";
    const cancelDeleteText = 'All is good, it was not deleted';
    const confirmationPrompt = window.confirm(confirmDeleteText);

    if (confirmationPrompt) {
      if (props.handleDeleteItem) {
        props.handleDeleteItem(props.id);
      } else {
        alert(cancelDeleteText);
      }
    }
  };

  const handleEditText = () => {
    props.handleEditItem(props.id);
  };

  return (
    <Card style={ { width: '100%', marginBottom: '1em' } }>
      <Card.Body>
        <Row>
          <LinkContainer to={ `${ props.url }` } style={ { cursor: 'pointer' } }>
            <Col xs={ 8 } sm={ 10 }>
              <Card.Title>
                {props.title}
              </Card.Title>
            </Col>
          </LinkContainer>
          <Col xs={ 2 } sm={ 1 }>
            <Card.Link>
              <Button
                onClick={ handleEditText }
                variant="outline-secondary"
                size="sm"
                aria-label="Edit button"
              >
                <FontAwesomeIcon icon={ faPen } />
              </Button>
            </Card.Link>
          </Col>
          <Col xs={ 2 } sm={ 1 }>
            <Card.Link>
              <Button
                onClick={ handleDeleteText }
                variant="outline-secondary"
                size="sm"
                aria-label="Delete button"
              >
                <FontAwesomeIcon icon={ faTrash }/>
              </Button>
            </Card.Link>
          </Col>
        </Row>
        <Row>
          <Col xs={ 10 } sm={ 11 }>
            <Card.Subtitle className="mb-2 text-muted">
              {props.description}
            </Card.Subtitle>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

SimpleCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
  handleEditItem: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  showLinkPath: PropTypes.func
};

SimpleCard.defaultProps = {
  title: '',
  description: ''
};

export default SimpleCard;
