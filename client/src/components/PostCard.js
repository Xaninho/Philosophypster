import React, { useContext } from 'react';
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function PostCard({
    post: { body, createdAt, id, username, likeCount, commentCount, likes }
  }) {
  
    function likePost() {
        console.log('Like Post!');
    }
    function commentOnPost() {
        console.log('Comment Post!');
    }

    return (
      <Card fluid>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprobaway.files.wordpress.com%2F2013%2F06%2Fmarcus_aurelius_4.jpg&f=1&nofb=1"
          />
          <Card.Header>{username}</Card.Header>
          <Card.Meta as={Link} to={`/posts/${id}`}>
            {moment(createdAt).fromNow(true)}
          </Card.Meta>
          <Card.Description>{body}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button as='div' labelPosition='right' onClick={likePost}>
                <Button color='teal' basic>
                    <Icon name='heart' />
                </Button>
                <Label basic color='teal' pointing='left'>
                    {likeCount}
                </Label>
            </Button>
            <Button as='div' labelPosition='right' onClick={commentOnPost}>
                <Button color='blue' basic>
                    <Icon name='comments' />
                </Button>
                <Label basic color='blue' pointing='left'>
                    {commentCount}
                </Label>
            </Button>
        </Card.Content>
      </Card>
    );

  }

export default PostCard;