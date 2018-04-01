var React = require('react');
var {Link, IndexLink} = require('react-router');
var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        var location = this.refs.search.value;
        var encodedLocation = encodeURIComponent(location);
        
        if(location.length > 0) {
            window.location.hash = `#/?location=${encodedLocation}`; 
            location= "";
        }
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu" data-dropdown-menu>
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active">
                                Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active">
                                About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active">
                                Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                 
                    <form onSubmit={this.onSearch}>
                     
                        <ul className="menu">
                      
                            <li>
                                <input type="search" ref="search" placeholder="Search weather by City"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});
module.exports = Nav;