import styles from './about.module.scss'

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.hero}>
        Engineer by trade,
        <br />
        Artist at heart.
      </div>
      <p>
        Hello. My name is David Byttow. I'm obsessed with art and technology,
        and I like to blend the two together.
      </p>
      <p>
        I started my career when I dropped out of Purdue University at the age
        of 19 for a programming job at a gaming startup in Southern California.
        That company was called CodeFire, and it didn't last very long, but it
        helped me get my foot in the door enough to join a real game company.
        That company was called{' '}
        <a href="https://en.wikipedia.org/wiki/The_Collective_(company)">
          The Collective
        </a>{' '}
        (formerly known as Double Helix Games and now known as Amazon Game
        Studios).
      </p>
      <p>
        I've worked at a handful of other great companies too. Here's an brief
        list and some of the projects I'm most proud of having had a hand in:
        <ul>
          <li>
            The Collective
            <ul>
              <li>
                <a href="https://en.wikipedia.org/wiki/Indiana_Jones_and_the_Emperor%27s_Tomb">
                  Indiana Jones and the Emperor's Tomb
                </a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Wrath_Unleashed">
                  Wrath Unleashed
                </a>
              </li>
              <li>Star Wars Episode III: Revenge of the Sith</li>
              <li>Marc Ecko's Getting Up: Contents Under Pressure</li>
              <li>Dirty Harry (canceled)</li>
              <li>Silent Hill 5: Homecoming</li>
            </ul>
          </li>
          <li>
            Bandai Namco of America
            <ul>
              <li>Afro Samurai</li>
              <li>Warhammer 40K</li>
            </ul>
          </li>
          <li>
            Google
            <ul>
              <li>AppEngine</li>
              <li>Google Wave</li>
              <li>Google Buzz</li>
              <li>Google+</li>
            </ul>
          </li>
          <li>
            Square
            <ul>
              <li>Starbucks x Square</li>
              <li>Square Wallet</li>
              <li>Square Cash</li>
            </ul>
          </li>
          <li>
            Medium (twice, actually)
            <ul>
              <li>Medium.com</li>
              <li>Medium iOS</li>
            </ul>
          </li>
          <li>
            Secret
            <ul>
              <li>Secret App</li>
              <li>Ping</li>
            </ul>
          </li>
          <li>
            Bold
            <ul>
              <li>Bold.co</li>
              <li>Bold.io</li>
            </ul>
          </li>
          <li>
            Postmates
            <ul>
              <li>Postmates Apps</li>
            </ul>
          </li>
          <li>
            Snapchat
            <ul>
              <li>Discover Shows</li>
            </ul>
          </li>
          <li>Bridgewater Associates</li>
        </ul>
      </p>
      <p>
        Needless to say, I've learned a lot since I was an intrepid 19 year-old.
      </p>
      <p>
        Today, I live in New York City. I keep myself busy with plenty of side
        projects and by playing piano. I also make a lot of little games and
        participate in game jams by dabbling in Godot, Unreal Engine 4, and
        Unity.
      </p>
      <p>
        You can follow me on{' '}
        <a href="https://twitter.com/davidbyttow">Twitter @davidbyttow</a> or
        read my posts on <a href="https://medium.com/@davidbyttow">Medium</a>.
      </p>
      <p>
        Or shoot send me a message at{' '}
        <a href="mailto:david.byttow@gmail.com">david.byttow@gmail.com</a>.
      </p>
    </div>
  )
}

export default About
