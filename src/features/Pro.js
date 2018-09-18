import React, { Component } from 'react';
import RoleTable from './RoleTable';
import '../App.css';
import phone from '../images/android_pixel_quite_black_portrait.png';
import audits from '../images/audits.png';
import integrations from '../images/integrations.png';


class Pro extends Component {

  render() {
    return (
      <div className="center-align">
        <div>
          <h3>Graphite Pro</h3>
          <h5>Team-wide collaboration on documents, files, and more</h5>
          <div className="row pro-section container">
            <div className="col s12 m6">
              <img src={phone} alt="Mobile phone" className="phone-img" />
            </div>
            <div className="col s12 m6 mobile-text">
              <h5>Manage your team and collaborate from any device</h5>
              <p>
                Graphite works great on any operating system and any device. On the go? Manage your team right from your phone.
                Back at the office, keep working on your desktop.
              </p>

            </div>
          </div>

          <div className="row pro-section container">
            <div className="col s12">
              <h5>Full access control</h5>
            </div>
            <div className="col s12">
              <RoleTable />
            </div>
          </div>

          <div className="row pro-section container">
            <div className="col s12">
              <h5>Audit History</h5>
              <p>When each user owns their own data, understanding what each member of your team has done and when becomes even more important. Graphite Pro audits exposes the activity most important to your organization.</p>
            </div>
            <div className="col s12">
              <img src={audits} className="responsive-img z-depth-4" alt="Audit logs" />
            </div>
          </div>

          <div className="row pro-section container">
            <div className="col s2 row center-align">
              <img src={integrations} className="responsive-img" alt="Integrations" />
            </div>
            <div className="col s10 mobile-text">
              <h3>Integrations</h3>
              <h5>Medium — Post Graphite Docs as drafts to your Medium account.</h5>
              <h5>Slack — When a Graphite Doc is shared with your team, an alert can be triggered on the channel of your choice.</h5>
              <h5>Webhooks — Connect Graphite to ALMOST anything.</h5>
            </div>
          </div>

          <div className="row pro-section container">
            <div className="col s12 center-align">
              <h5>Encrypted Real-Time Collaboration</h5>
              <iframe src="https://player.vimeo.com/video/288013669" width="640" height="400" title="Real-time collaboration"></iframe>
            </div>
            <div className="col s12">
              <p>For the first time ever, anywhere, you can experience the convenience of real-time collaboration while maintaining full encryption. Each team member owns their copy of the document, and each copy is encrypted with that person'{/*'*/}s encryption keys. Yet, everyone can collaborate just like they can with traditional applications.</p>
            </div>
          </div>

          <div className="row pro-section container">
            <div className="col s12 center-align">
              <h5>Ready to begin?</h5>

              <div>
                <div>
                  <h5>Graphite Pro includes all of the Graphite features you are used to plus the following:</h5>
                </div>
                <div>
                  <div>
                    <p>Phone and email support<span><a className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Dedicated phone and email support from a real person. Mon-Fri, 9am-9pm Central Time."><i className="more-info material-icons">info</i></a></span></p>
                  </div>
                  <div>
                    <p>Team management<span><a className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Add teammates that are separate from your other contacts, and collaborate with them."><i className="more-info material-icons">info</i></a></span></p>
                  </div>
                  <div>
                    <p>Team member roles and permissions<span><a className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Control what level of access each person on your team has to documents and files."><i className="more-info material-icons">info</i></a></span></p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>Secure authentication for entire team<span><a className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Free Blockstack IDs to allow for secure, decentralized single-sign-on authentication."><i className="more-info material-icons">info</i></a></span></p>
                  </div>
                  <div>
                    <p>Team audit history<span><a className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="View last login and other actions taken by members of your team."><i className="more-info material-icons">info</i></a></span></p>
                  </div>
                  <div>
                    <p>One-click sharing to entire team<span><a className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Don't just share to a single person, share to the entire team with one click."><i className="more-info material-icons">info</i></a></span></p>
                  </div>
                  <div>
                    <p>Integrations<span><a className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Integrations with decentralized apps and traditional apps like Wordpress, Medium, Slack, and webhook access."><i className="more-info material-icons">info</i></a></span></p>
                  </div>
                  <div>
                    <p>Calendar (soon)<span><a className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Simple calendar with event creation and management."><i className="more-info material-icons">info</i></a></span></p>
                  </div>
                  <div>
                    <p>Business messaging through <a href="https://www.stealthy.im">Stealthy</a><span><a className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Explore all the features of Stealthy both in Graphite and through a dedicated mobile app."><i className="more-info material-icons">info</i></a></span></p>
                  </div>
                </div>
                </div>

              <div className="pricing-cards col s12 m4">
                <div className="card">
                  <div className="card-content center">
                    <h5 className=''>Team</h5>
                  </div>
                    <div className="card-content center">
                      <h2 className='blue-text'><small>$</small>19.99</h2>
                      <p>Per Month</p>
                    </div>
                  <ul className='collection center'>
                    <li className='collection-item'>
                      <strong>All Graphite Pro features plus:</strong>
                    </li>
                    <li className='collection-item'>
                      <strong>Up to 5 Users</strong>
                    </li>
                  </ul>

                </div>
              </div>
              <div className="pricing-cards col s12 m4">
                <div className="card">
                  <div className="card-content center">
                    <h5 className=''>Professional</h5>
                  </div>
                    <div className="card-content center">
                      <h2 className='red-text '><small>$</small>39.99</h2>
                      <p>Per Month</p>
                    </div>
                    <ul className='collection center'>
                      <li className='collection-item'>
                        <strong>All Graphite Pro features plus:</strong>
                      </li>
                      <li className='collection-item'>
                        <strong>Up to 15 Users</strong>
                      </li>
                    </ul>

                </div>
              </div>

                <div className="pricing-cards col s12 m4">
                <div className="card">
                  <div className="card-content center">
                    <h5 className=''>Enterprise</h5>
                  </div>
                    <div className="card-content center">
                      <h2 className='purple-text '><small>$</small>59.99</h2>
                      <p>Per month</p>
                    </div>
                    <ul className='collection center'>
                      <li className='collection-item'>
                        <strong>All Graphite Pro features plus:</strong>
                      </li>
                      <li className='collection-item'>
                        <strong>Up to 25 Users*</strong>
                      </li>
                    </ul>

                  </div>
                </div>

                <div className="col s12">
                  <p><em>*$5 per user per month after 25 users</em></p>
                </div>

                <div className=" col s12">
                <div className="card">
                  <div className="card-content center">
                    <h5 className=''>Self-Hosted and Self-Managed</h5>
                  </div>
                    <div className="card-content center">
                      <h2 className='green-text '><small></small>Free</h2>
                    </div>
                    <ul className='collection center'>
                      <li className='collection-item'>
                        <strong><a className="underline" href="github.com/Graphite-Docs/graphite">Github</a></strong>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className="sign-up">
              <h2>Create a free account or sign in, then sign up in-app for Graphite Pro <a className="underline" href="https://app.graphitedocs.com/settings">here</a>.</h2>
              <h5>Still have questions?</h5>
              <a href="mailto:contact@graphitedocs.com"><button className="btn black">Contact us</button></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pro;
