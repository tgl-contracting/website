import Link from 'next/link'
import Head from '../components/Head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default () => (
  <>
    <Head>
      <title key="work">TGL Contracting - Our Work</title>
    </Head>

    <header>
      <Navigation />
    </header>
    <main>
      <div class="container">
        <div class="section">

          <div class="row">
            <div class="col s12">
              <div class="icon-block">
                <br />
                <h1 class="center brown-text">Our Work</h1>
                <h3 class="center brown-text">
                  <i class="material-icons">settings</i>
                </h3>

                <p class="flow-text">TGL contracting represents a culmination of experience and industry knowledge gained over the last 15 years.  We have worked throughout New Zealand, with councils, parks, schools and not for profit community based organisations like, Makara Peak Supporters Club, New Plymouth Mountain Bike club and Wellington Mountain Bike club.</p>
                <p>Here is a snapshot of some of our recent work:</p>
              </div>
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <div class="section">
          <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1 hoverable">
                <div class="card-content white-text">
                  <span class="card-title activator text-darken-4">Makara Peak MTB Park</span>
                  <ul>
                    <li>Project: 	Makara Peak Mountain Bike Park (2012/17 and ongoing)</li>
                    <li>Description:	Preferred Contractor Status</li>
                    <li>Clients:		Wellington City Council (WCC) and the Makara Peak Supporters</li>
                    <li>Location:	Karori, Wellington</li>
                  </ul>
                  <p class="light">The Makara Peak Mountain Bike Park is an award winning, purpose built recreational space set in 250 hectares of native bush in the capital city of Wellington.  Visited by nearly 100,000 people each year; bikers, runners and walkers, it is recognised as a world class Mountain Bike park.</p>
                  <p class="light">Makara Peak has grown to need a long term committed and skilled contractor. As the needs of the park have developed so has TGL. Establishing procedures and close working relationships between Wellington City Council, the Makara Peak supporters and the public, TGL provides mountain bike track maintenance and construction services to keep the park in world class condition. The status of preferred contractor has been hard earned and now enables us to provide even better value and dependability for a key resource for the region.</p>
                  <p class="light">For the past five years, TGL has worked closely with WCC and the supporters to deliver the highest value for the limited funds available. TGL’s knowledge of the park is always growing and we are constantly trying to exceed the maintenance needs as the traffic and user numbers increase.</p>
                </div>
              </div>
            </div>

            <div class="col s12 m6">
              <div class="card white darken-1 hoverable">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="/static/trail-cliff.jpg" />
                </div>
                <div class="card-content blue-grey white-text">
                  <span class="card-title activator text-darken-4">Up Swing<i class="material-icons right">more_vert</i></span>
                  <ul>
                    <li>Project: 	Up Swing (2016/17 and ongoing)</li>
                    <li>Description:	Complete Construction and Surfacing</li>
                    <li>Clients:		Wellington City Council</li>
                    <li>Location:	Makara Peak Mountain Bike Park, Karori, Wellington</li>
                  </ul>
                </div>
                <div class="card-reveal blue-grey-text">
                  <span class="card-title text-darken-4">Up Swing<i class="material-icons right">close</i></span>
                  <p class="light">The park needed a more direct, and yet accessible (grade 3) climbing trail in tough terrain. This culminated in the construction of a 73m suspension bridge. TGL worked closely with the Makara Peak supporters and the Wellington City Council with surfacing adjustments of the lower section and complete construction and surfacing of the upper half.</p>
                  <p class="light">It was a technically challenging project, chiselled and cut into solid rock, it required large scale rock excavation, bridge construction and drainage systems.  TGL also had to re-develop and align existing tracks within the broader Makara Peak network, ensuring ‘rider experience continuity’ - making it easier for more people to ride single track to the top of the peak!</p>
                  <p class="light">The track was officially opened in March 2017, and has become one of the most popular routes for riders to access Makara Peak and now provides a continual grade 3 loop for visitors to the park.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="divider"></div>
        <br />

        <div class="section">
          <div class="row">
            <div class="col s12 m6">
              <div class="card white darken-1 hoverable">
                <div class="card-content blue-grey white-text">
                  <span class="card-title activator text-darken-4">Labyrinth Return<i class="material-icons right">more_vert</i></span>
                  <ul>
                    <li>Project: 	Labyrinth Return (2015/16)</li>
                    <li>Description:	Complete Design and Construction</li>
                    <li>Clients:		Lower Hutt City Council</li>
                    <li>Location:	Wainui Trail Project (WTP) Wainuiomata, Wellington</li>
                  </ul>
                </div>
                <div class="card-reveal blue-grey-text">
                  <span class="card-title text-darken-4">Labyrinth Return<i class="material-icons right">close</i></span>
                  <p class="light">TGL was contracted to take a new grade 3 trail from rough design to completion. Labyrinth return is now a crucial, and popular part of the WTP network. This trail meets grade three design standards and construction, and yet delivers a unique rider experience.  The trail  incorporated innovative maintenance features to reduce the long term costs. This trail was finished on time and budget.</p>
                </div>
              </div>
            </div>
            <div class="col s12 m6">
              <div class="card white darken-1 hoverable">
                <div class="card-content blue-grey white-text">
                  <span class="card-title activator text-darken-4">Wainui Trail Project<i class="material-icons right">more_vert</i></span>
                  <ul>
                    <li>Project: 	Wainui Trail Project (2015 and ongoing)</li>
                    <li>Description:	Construction and maintenance</li>
                    <li>Clients:		Lower Hutt City Council</li>
                    <li>Location:	Wainui Trail Project (WTP) Wainuiomata, Wellington</li>
                  </ul>
                </div>
                <div class="card-reveal blue-grey-text">
                  <span class="card-title text-darken-4">Wainui Trail Project<i class="material-icons right">close</i></span>
                  <p class="light">Wainui trail park is an established facility funded by Hutt City Council and supported by the Wainui Trail Project committee. TGL worked on the network of trails, positioning the park as a more usable all weather park and aligning tracks to meet appropriate grade specifications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="divider"></div>
        <br />

        <div class="section">
          <div class="row">
            <div class="col s12 m6">
              <div class="card white darken-1 hoverable">
                <div class="card-content blue-grey white-text">
                  <span class="card-title activator text-darken-4">Capital BMX Track<i class="material-icons right">more_vert</i></span>
                  <ul>
                    <li>Project: 	Capital BMX Track (2016 and ongoing)</li>
                    <li>Description:	Preferred Contractor Status</li>
                    <li>Clients: Wellington City Council and Capital BMX Club</li>
                    <li>Location:	Karori, Wellington</li>
                  </ul>
                </div>
                <div class="card-reveal blue-grey-text">
                  <span class="card-title text-darken-4">Capital BMX Track<i class="material-icons right">close</i></span>
                  <p class="light">The Capital BMX Track has to meet the stringent UCI (Union Cycliste Internationale ) specifications. TGL is the preferred contractor for maintenance of the track to ensure it maintains these standards year round. We plan and manage a regular maintenance schedule to take care of this premium race facility, and make sure it operates within budget. BMX tracks have very specific maintenance needs specific to the location, environment and original building methodology.</p>
                </div>
              </div>
            </div>
            <div class="col s12 m6">
              <div class="card white darken-1 hoverable">
                <div class="card-content blue-grey white-text">
                  <span class="card-title activator text-darken-4">Peak Flow<i class="material-icons right">more_vert</i></span>
                  <ul>
                    <li>Project: 	Peak Flow (2016 and ongoing)</li>
                    <li>Description:	Repairs and Maintenance</li>
                    <li>Client: Wellington City Council</li>
                    <li>Location:	Makara Peak Mountain Bike Park, Wellington</li>
                  </ul>
                </div>
                <div class="card-reveal blue-grey-text">
                  <span class="card-title text-darken-4">Peak Flow<i class="material-icons right">close</i></span>
                  <p class="light">In 2015 WCC funded a grade 3 downhill in Makara Peak Mountain Bike Park that was completed by another contractor. Due to its popularity and local weather conditions the track required urgent, immediate and significant maintenance and remedial repairs. TGL stepped in to take on the short and long term upkeep of this track, which has proved to be the most used downhill track in the park. TGL works closely with WCC and developed an ongoing monitoring and maintenance schedule and budget.</p>
                  <p>Since the upgrades and maintenance the track has seen more traffic and enabled better user experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="divider"></div>
        <br />
        <div class="section">
          <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1 hoverable">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="/static/road-jump.jpg" />
                </div>
                <div class="card-content blue-grey white-text">
                  <span class="card-title activator text-darken-4">Mt Victoria Super D<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal blue-grey-text">
                  <span class="card-title grey-text text-darken-4">Mt Victoria Super D<i class="material-icons right">close</i></span>
                  <ul>
                    <li>Project: 	Mt Victoria Super D race line and Trevor Extension (2017)</li>
                    <li>Description:	Repairs and Maintenance</li>
                    <li>Clients: Wellington City Council</li>
                    <li>Location:	Mt Victoria, Wellington</li>
                  </ul>

                  <p class="light">The Wellington Mountain Bike Club, Wellington City Council and the Mt Vic Super D event organisers wanted a unique race line with specific built features integrated into a technical trail, whilst maintaining grade specific continuity for an event.</p>
                  <p class="light">The majority of the grade 4 trail is off camber with tree roots, and natural features.  It required retaining, benching, shaping and the most ambitious part of this project was a race only ‘road gap’; a temporary structure on permanent foundations allowing riders to jump over a wide dual use track. This feature is removable and had to be lined up perfectly to ensure a race line that would land riders safely on the other side. With a very  tight timeline for construction, full testing had to be completed before the event. The feature is only operational when marshals and safety barriers are in place. In the end the feature and the new trail were resounding success and the disassembly of the ‘road gap’ was done easily following the event.</p>
                </div>
              </div>
            </div>

            <div class="col s12 m6">
              <div class="card blue-grey darken-1 hoverable">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="/static/pump-track1.jpg" />
                </div>
                <div class="card-content blue-grey white-text">
                  <span class="card-title activator text-darken-4">Bikes in Schools<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal blue-grey-text">
                  <span class="card-title grey-text text-darken-4">Amesbury School<i class="material-icons right">close</i></span>
                  <ul>
                    <li>Project: Bikes in Schools programme (2017)</li>
                    <li>Description: Consulting and remediation works</li>
                    <li>Client: Amesbury School</li>
                    <li>Location:	Mt Victoria, Wellington</li>
                  </ul>
                  <div class="divider"></div>
                  <p class="light">Amesbury school first contacted TGL when they wanted an independent expert to assess the conditions, specifications and execution of their Bikes in Schools pump track project - the track was not functioning and needed urgent remedial work . TGL worked to prepare a report detailing the situation, factors leading to the condition of the current track, identified deficient landscape works, errors in procedures, policy, materials, scope and construction.</p>
                </div>
              </div>
            </div>

            <div class="col s12 m6">
              <div class="card white darken-1 hoverable">
                <div class="card-content blue-grey white-text">
                  <span class="card-title activator white-text text-darken-4">Maidstone Jump Line<i class="material-icons right">more_vert</i></span>
                  <ul>
                    <li>Project: 	Maidstone Jump Line (2016 and ongoing)</li>
                    <li>Description:	Complete Design and Construction</li>
                    <li>Clients: Hutt City Council and Wellington Mountain Bike Club</li>
                    <li>Location:	Maidstone Park, Upper Hutt</li>
                  </ul>
                </div>
                <div class="card-reveal blue-grey-text">
                  <span class="card-title grey-text text-darken-4">Maidstone Jump Line<i class="material-icons right">close</i></span>
                  <p class="light">TGL was engaged to develop a very challenging grade 5 jump line in Maidstone Park. With limited funds and a hill recently clear felled, TGL started work on a large jump line. Working with a  local group of riders to specify and design the course, Maidstone now boasts  some of the biggest jumps in the region and continues to develop as a leading downhill facility.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer/>
  </>
)
