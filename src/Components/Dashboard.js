import React from 'react'
import Modal from './Modal'


class Dashboard extends React.Component {

	state={
		show: false
	}

	showModal = () => {
this.setState({ show: true })
console.log('show modal clicked')
this.props.history.push('/modal')

	}

	hideModal = () => {
		this.setState({ show: false })
		console.log('hide modal clicked')
	}

	

	render() {
		return (
			<>
			<h1>React Modal</h1>
				<Modal {...this.state} handleClose={this.hideModal}/>
			<p>Modal</p>
			<p>Data</p>
		
	
			<button type="button" onClick={this.showModal}>open</button>
			</>
		)
	}
}

export default Dashboard