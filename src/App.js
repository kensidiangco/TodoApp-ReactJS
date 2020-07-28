import React, { Component } from 'react';


class App extends Component {
	constructor(props){
		super(props);

		this.state={
			newItem:"",
			list:[]
		}
	}
	updateInput(key, value){
		this.setState({
			[key]: value
		});
	}
	addItem(){
		const newItem={
			id: 1 + Math.random(),
			value: this.state.newItem.slice()
		};

		const list = [...this.state.list];

		list.push(newItem);

		this.setState({
			list,
			newItem:""
		});
	}
	deleteItem(id){
		const list=[...this.state.list];

		const updatedList = list.filter(item => item.id !== id);

		this.setState({list: updatedList});
	}

	render() {
		return (
			<div className="App">
				<div class="container">
					<p class="display-2 text-center">TODO LIST</p>
					<br/>
					<div class="row">
						<div class="col-md-4">
							<input
								type="text"
								placeholder="Type todo here..."
								class="form-control"
								value={this.state.newItem}
								onChange={e => this.updateInput("newItem", e.target.value)} 
							/>
						</div>
						<div class="col">
							<button
								class="btn btn-light"
								onClick={() => this.addItem()}
							>
								Add
							</button>
						</div>
					</div><hr/>
					<ul>
						{this.state.list.map(item =>{
							return(
								<li class="lead" key={item.id}>
									{item.value}&nbsp;&nbsp;&nbsp;&nbsp;
									<button
										class='btn btn-danger btn-sm'
										onClick={() => this.deleteItem(item.id)}
									>
										X
									</button>
								</li>
								)
						})}
					</ul>
				</div>
			</div>
		)
	}
}

export default App;