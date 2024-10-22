import Card from 'react-bootstrap/Card';

const ArticleCard = ({ img, title, description, date, comments, badge }) => {
    return (
        <Card className='position-relative p-2'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title className='fw-bold fs-5'>
                    {title}
                </Card.Title>
                <Card.Text className='text-muted'>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between text-info bg-transparent">
                <small>{date}</small>
                <small>{comments}</small>
            </Card.Footer>
            <span className='article-card-badge shadow-sm'>
                {badge}
            </span>
        </Card>
    );
}

export default ArticleCard;