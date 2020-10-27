import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
        tags: ["tag1", "tag2", "tag3"]
    };

    /*
    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    };
    Isso serve para dar bind em elementos. Mas nao entendi direito como fazer, preciso pesquisar.
    */

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    };

    handleDecrement = () => {
        if (this.state.count <= 0 ) {
             window.alert('Voce nao pode.')
        } else this.setState({ count: this.state.count - 1})
    };

    render() { 
        return ( 
            <React.Fragment>
                <button onClick = { this.handleIncrement } style = {{ fontSize: 20 }} className="btn btn-secondary btn-sm">Aumentar</button> <br/>
                <span style = {{ fontSize: 30 }} className={this.getClassesColor()}> {this.formatCount()} </span> <br/>
                <button onClick = { this.handleDecrement } style = {{ fontSize: 20 }} className="btn btn-secondary btn-sm">Diminuir</button> <br/>
                { this.state.tags.length === 0 && 'There are no TAGS. Please, add some tags!'}
                <ul>
                    { this.state.tags.map(tag => <li key={tag}> { tag } </li>) }
                </ul>
            </React.Fragment>
         );
    }

    getClassesColor() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state; // Agora podemos substituir this.state.count por count diretamente.
        return count === 0 ? 'Zero' : count;
    }

}
 

export default Counter;
