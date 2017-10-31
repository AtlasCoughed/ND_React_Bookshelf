import React, {Component} from 'react';
import NotificationSystem from 'react-notification-system';


class Book extends Component {
	state = {
		currentShelf: '',
	};

	componentDidMount(){
		this.setState({currentShelf: this.props.book.shelf})
	}

	/**
	 * If there is a difference in shelf state for the given book, it calls moveBook to change the
	 * shelf in the backend.
	 * @param e
	 */
	moveBookToDiffShelf = (e) => {
		if(this.state.currentShelf !== e.target.value){
			this.props.moveBook(e.target.value, this.props.book)
		}
	};

	render() {
		return (
			<li key={this.props.book.id}>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}/>
						<div className="book-shelf-changer">
							<select onChange={this.moveBookToDiffShelf} value='none'>
								<option value="none" disabled>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">{this.props.book.title}</div>
					<div className="book-authors">{this.props.book.authors.map((auth => (<div key={auth}>{auth}</div>)))}</div>
				</div>
			</li>
		);
	}
};

export default Book;