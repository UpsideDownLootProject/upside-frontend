import type { NextPage } from 'next'

const FAQ: NextPage = () => {
    return (
        <div className="container">

            <main className="main">
                <h1>
                    Frequently Asked Questions
                </h1>

                <div className='faq'>
                    <h2>
                        The Upside Down
                    </h2>
                    <p className="glitch" data-text="The Upside Down is an alternate dimension existing in parallel to the human world.">
                        The Upside Down is an alternate dimension existing in parallel to the human world. The history of the Upside Down remains a mystery. Exactly how and why it came into existence, is unclear.
                    </p>
                    <p>
                        It contains the same locations and infrastructure as the human world. There is little proven knowledge concerning the Upside Down, <span className="glitch" data-text="as it remains shrouded in mystery. In spite of this, the dimension possesses a few observable properties and characteristics."> as it remains shrouded in mystery. In spite of this, the dimension possesses a few observable properties and characteristics. </span> Such as, light, gravity, and sound appear to function the same way as in the regular world (?).
                    </p>
                    <p className="glitch" data-text="The Upside Down affects the electromagnetic field of the human world, often causing electricity and electronics to malfunction.">
                        The Upside Down affects the electromagnetic field of the human world, often causing electricity and electronics to malfunction.
                    </p>

                    <h2>
                        What is Upside Down Loot?
                    </h2>
                    <p>
                        Upside Down Loot is a collection of 8,000 unique bags of adventurer gear.
                    </p>
                    <p className="glitch" data-text="Each loot bag contains 8 items:">
                        Each loot bag contains 8 items:
                    </p>
                    <p style={{ transform: "rotate(180deg) scaleX(-1)" }}>
                        a piece for an adventurer&apos;s chest, foot, hand, head, neck, ring, waist, and weapon.
                    </p>
                    <p>
                        Upside Down Loot is identical to Loot except the fact that it&apos;s the opposite. The laws that rule the elements are symmetrical to the ones that rule in Loot.
                    </p>

                    <h2>
                        What is Loot?
                    </h2>
                    <p>
                        Loot is a collection of 8,000 unique bags of adventurer gear, originally released by Dom Hofmann. At release, anyone could claim loot bags for just gas, and all bags were claimed in under 4 hours. Each loot bag contains 8 items: a piece for an adventurer&apos;s chest, foot, hand, head, neck, ring, waist, and weapon.
                    </p>
                    <p>
                        Loot is an unaudited project. Bags #1 to #7777 were claimable by anyone and #7778 to #8000 are currently reserved for the contract deployer.
                    </p>

                    <h2>
                        Why is loot special?
                    </h2>
                    <p>
                        Loot is unique—the first project of its kind. With no company, art, team, or attributes, Loot makes it impossible to gate-keep any creative decisions (h/t @john_c_palmer).
                    </p>
                    <p>
                        Loot is the unfiltered, uncensorable building block for stories, experiences, games, and more, in the hands of the community, at no cost. Loot pursues complete decentralization from day one.
                    </p>

                    <h2>
                        Can I build with Upside Down Loot?
                    </h2>
                    <p>
                        Yes, you are free to use Loot in any way you want. For inspiration, see existing resources put together by the community.
                    </p>
                </div>

            </main>
        </div>
    )
}

export default FAQ
