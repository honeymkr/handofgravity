import React from 'react';

class Calendly extends React.Component {
  calendlyScriptSrc = 'https://assets.calendly.com/assets/external/widget.js';

  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', this.calendlyScriptSrc);
    head.appendChild(script);
  }

  componentWillUnmount() {
    const head = document.querySelector('head');
    const script = document.querySelector('script');
    head.removeChild(script);
  }
  render() {
    return (
      <div id="schedule_form">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/handofgravity"
          style={{ minWidth: '480px', height: '640px' }}
        />
      </div>
    );
  }
}

export default Calendly;