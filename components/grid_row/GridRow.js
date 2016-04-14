import React, { Component, PropTypes } from 'react';
import blacklist from 'blacklist';
import A from '../constants';

/**
 * Component that handles Row part of a Grid system. Syntax is somewhat similar to bootstrap's grid class syntax.
 */
class GridRow extends Component {
	render () {
		const { gutter } = this.props;
		const rowStyle = {
			display: 'flex',
			flexWrap: 'wrap',
			msFlexWrap: 'wrap',
			WebkitFlexWrap: 'wrap',
			marginLeft: (gutter / -2),
			marginRight: (gutter / -2)
		};

		const props = blacklist(this.props, 'className', 'gutter', 'style');

		return (
			<div {...props} style={Object.assign(rowStyle, this.props.style)} className={this.props.className} />
		);
	}
}

GridRow.propTypes = {
	children: PropTypes.node,
	/**
	 * input a css class name
	 */
	className: PropTypes.string,
	gutter: PropTypes.number,
	style: PropTypes.object
};

GridRow.defaultProps = {
	gutter: A.width.gutter
};

GridRow.styleguide = {
  category: 'Layout',
  index: '4.4',
  example:`
<section>
  <h5>Row Example</h5>
  <p>Compare this example to GridCol example.</p>
    <GridRow>

      <GridCol sm="1" md="1/2">
        <Card>
          <h1>Title Goes Here</h1>
          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card>
      </GridCol>
    </GridRow>
    <GridRow>
      <GridCol sm="1" md="1/2">
        <Card>
          <h1>Title Goes Here</h1>
          <p>So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities.</p>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card>
      </GridCol>

      <GridCol sm="1" md="1/2">
        <Card>
            <h1>Basic Card</h1>
          <h2>You can also use a subtitle like this</h2>
          <p>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
        </Card>
      </GridCol>

    </GridRow>
</section>
`
};

export default GridRow;
