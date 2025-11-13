export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: React.ReactNode
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'modeling-bubbles-as-oscillators',
    title: 'What I Learned from Modeling Bubbles as Oscillators',
    date: '2024-10-15',
    excerpt:
      'The surprisingly powerful insight that came from treating millimeter-sized bubbles as simple harmonic oscillators.',
    content: (
      <div className="prose prose-lg max-w-none">
        <p>
          When I first started working on bubble-driven surface cleaning, I expected the physics to
          be hopelessly complicated. After all, bubbles in acoustic fields involve fluid-structure
          interaction, surface tension, viscosity, boundary layers, and all sorts of nonlinear effects.
        </p>

        <h2>The simplifying insight</h2>
        <p>
          But here is what changed everything: I realized that for <em>translational motion</em> of the
          bubble&apos;s center of mass, you can treat the whole thing as a damped harmonic oscillator. Not
          the radial pulsations everyone studies in ultrasonic cavitation—those are well-known. I&apos;m
          talking about the bubble <em>swaying side to side</em> in response to low-frequency acoustic
          forcing.
        </p>

        <h2>The physics in three ingredients</h2>
        <p>
          The model needs just three things:
        </p>
        <ol>
          <li>
            <strong>Restoring force:</strong> When the bubble displaces laterally, it deforms slightly
            into an ellipsoid. Surface tension acts on the changed curvature, creating a pressure
            difference that pulls the bubble back. The effective spring constant turns out to be
            roughly proportional to the surface tension σ.
          </li>
          <li>
            <strong>Inertia:</strong> The bubble has to drag surrounding fluid with it. This
            &quot;hydrodynamic added mass&quot; dominates the inertia and scales with the fluid density and
            bubble volume: m<sub>eff</sub> ≈ (1/2) ρ<sub>f</sub> (4/3)πR₀³.
          </li>
          <li>
            <strong>Damping:</strong> Viscous drag dissipates energy, setting the quality factor Q of
            the resonance.
          </li>
        </ol>

        <h2>The punchline: size-dependent resonance</h2>
        <p>
          Put these together and you get a natural frequency that scales as f<sub>peak</sub> ∝ R₀<sup>-3/2</sup>.
          For a bubble with radius around 0.65 mm, that&apos;s about 45–50 Hz—well below the ultrasonic
          range, and well above the quasi-static regime.
        </p>
        <p>
          When we drove bubbles at their resonance frequency, their lateral motion was amplified
          dramatically compared to the surrounding fluid. Off resonance, the bubble just gets passively
          advected. At resonance, it <em>sways</em> with large amplitude, creating high shear events on
          nearby surfaces.
        </p>

        <h2>Why this matters</h2>
        <p>
          This oscillator picture gave us:
        </p>
        <ul>
          <li>
            <strong>Predictive power:</strong> We could calculate the resonance frequency for any
            bubble size and test it experimentally. The scaling law held up beautifully.
          </li>
          <li>
            <strong>Design guidance:</strong> Want to clean a surface with bubbles? Measure or estimate
            your bubble size, compute the resonance, and drive at that frequency. You&apos;ll get much
            better cleaning for the same energy input.
          </li>
          <li>
            <strong>A non-cavitating alternative:</strong> Traditional ultrasonic cleaning relies on
            violent cavitation, which can damage delicate surfaces and promote biofilm formation. Our
            low-frequency resonance approach is gentler but still effective.
          </li>
        </ul>

        <h2>The broader lesson</h2>
        <p>
          I think the real lesson here is about <em>finding the right level of abstraction</em>. Yes,
          you could write down the full Navier-Stokes equations with free boundaries and solve them
          numerically. But that&apos;s often overkill and obscures the underlying physics.
        </p>
        <p>
          By stepping back and recognizing the bubble as an oscillator, I could connect to centuries
          of well-understood physics, make testable predictions, and build intuition. The details
          matter, but the broad strokes matter more.
        </p>

        <h2>What&apos;s next</h2>
        <p>
          I&apos;m now thinking about how to extend this framework to <em>arrays</em> of bubbles. Do they
          couple? Can you create collective modes? Could you design a surface cleaning device that
          exploits bubble resonance and spatial patterning together?
        </p>
        <p>
          The oscillator model opened a door. I&apos;m excited to see where it leads.
        </p>
      </div>
    ),
  },
  {
    slug: 'transplant-allocation-ethical-thresholds',
    title: 'Why Transplant Allocation Needs Explicit Ethical Thresholds',
    date: '2024-09-22',
    excerpt:
      'Pure utilitarian allocation maximizes life-years but can feel morally wrong. Here is why explicit thresholds help.',
    content: (
      <div className="prose prose-lg max-w-none">
        <p>
          Organ transplantation is a domain where scarcity, urgency, and uncertainty collide. We have
          far more patients waiting for organs than we have organs available. How do we decide who
          gets one?
        </p>

        <h2>The tension between urgency and efficiency</h2>
        <p>
          Current systems like MELD (Model for End-Stage Liver Disease) prioritize <em>urgency</em>:
          the sickest patients get priority. This feels intuitively fair—help those
          in greatest need first.
        </p>
        <p>
          But MELD has a problem: it doesn&apos;t account for <em>post-transplant outcomes</em>. A patient
          with MELD 40 might have only a 20% chance of surviving five years post-transplant, while a
          patient with MELD 25 might have a 70% chance. If you give the organ to the MELD 40 patient
          every time, you might save fewer total life-years.
        </p>

        <h2>Why pure utilitarianism feels wrong</h2>
        <p>
          So why not just maximize expected post-transplant survival? This is the utilitarian approach:
          always give the organ to whoever is predicted to get the most benefit.
        </p>
        <p>
          Here&apos;s the problem: If you do this naively, you can end up repeatedly bypassing the sickest
          patients. Imagine someone with a 90-day mortality risk of 80% on the waitlist. A pure
          utilitarian rule might never give them an organ if there&apos;s always someone else with slightly
          better predicted long-term survival.
        </p>
        <p>
          That feels <em>morally wrong</em>. You&apos;re essentially writing off the worst-off patients to
          optimize total QALYs. It violates a basic intuition about fairness: we shouldn&apos;t completely
          abandon people at catastrophic risk.
        </p>

        <h2>Enter Harm-Threshold Utilitarianism</h2>
        <p>
          My proposal, Harm-Threshold Utilitarianism (HTU), tries to get the best of both worlds. It&apos;s
          still utilitarian—it tries to maximize expected benefit—but it incorporates two explicit
          <em>moral constraints</em>:
        </p>

        <h3>1. Epistemic threshold</h3>
        <p>
          Don&apos;t act on differences in predicted utility unless they&apos;re statistically robust. If your
          model says patient A will get 5.2 years and patient B will get 5.1 years, but both estimates
          have huge uncertainty, you shouldn&apos;t treat that as a meaningful difference.
        </p>
        <p>
          Formally: only allocate to patient A over patient B if P(U<sub>A</sub> &gt; U<sub>B</sub>) &gt; 0.95
          (or some other high threshold). This creates an uncertainty-adjusted utility that penalizes
          predictions with wide confidence intervals.
        </p>

        <h3>2. Catastrophic harm threshold</h3>
        <p>
          Define a threshold H<sub>crit</sub> for &quot;catastrophic&quot; short-term mortality risk (e.g., 30%
          chance of dying in 90 days). If there are patients above this threshold, prioritize getting
          them below it.
        </p>
        <p>
          Formally: for each candidate i, count how many other patients would remain above H<sub>crit</sub>
          {' '}if you gave the organ to i. Minimize this count first (lexicographically). Only if there&apos;s a
          tie do you maximize uncertainty-adjusted utility.
        </p>

        <h2>What this achieves</h2>
        <p>
          HTU makes the trade-off <em>explicit and tunable</em>. By varying H<sub>crit</sub>, you trace
          out an &quot;urgency-efficiency frontier.&quot; Set it low, and you get something close to pure
          utilitarianism. Set it high, and you protect more high-urgency patients.
        </p>
        <p>
          In simulations with real transplant registry data, HTU at baseline settings gains about 0.25
          years (~3 months) of expected five-year survival per transplant compared to MELD, while still
          never totally abandoning patients at catastrophic risk.
        </p>

        <h2>Why thresholds matter philosophically</h2>
        <p>
          I think explicit thresholds are important because they make the <em>moral structure</em> of
          the decision visible. When you use a black-box machine learning model or a pure rank-ordering,
          it&apos;s hard to see what values are being encoded.
        </p>
        <p>
          HTU says: &quot;We want to maximize total benefit, <em>but</em> we will not act on weak evidence,
          and we will not catastrophically abandon the worst-off.&quot; Those constraints are normative
          commitments, and they should be explicit and debatable.
        </p>
        <p>
          Different societies might set H<sub>crit</sub> differently, and that&apos;s okay. The point is to
          make the choice <em>clear</em>, not to hide it inside an opaque algorithm.
        </p>

        <h2>The bigger picture</h2>
        <p>
          This framework isn&apos;t specific to transplant allocation. Anywhere you have scarce resources,
          uncertainty, and competing fairness principles, you face similar tensions. Triage in emergency
          medicine. ICU bed allocation during pandemics. Vaccine distribution.
        </p>
        <p>
          I think we need more work on <em>constrained optimization frameworks</em> that blend
          consequentialist goals with deontological constraints. HTU is one attempt. I&apos;m sure there are
          others, and better ones to come.
        </p>
        <p>
          But the core lesson is: <strong>make your thresholds explicit</strong>. Don&apos;t bury them in
          model coefficients or scoring weights. Put them front and center, so we can argue about them
          like the moral choices they are.
        </p>
      </div>
    ),
  },
  {
    slug: 'hip-replacement-patients-sports',
    title: 'What Hip Replacement Patients Really Care About When They Ask About Sports',
    date: '2024-08-10',
    excerpt:
      'Return to sports after total hip arthroplasty is about more than physical capability—it is about identity and quality of life.',
    content: (
      <div className="prose prose-lg max-w-none">
        <p>
          When a 52-year-old avid cyclist with severe hip arthritis asks their surgeon, &quot;Will I be
          able to ride again after surgery?&quot; they&apos;re not just asking about biomechanics. They&apos;re asking
          about <em>who they&apos;ll be</em> after the operation.
        </p>

        <h2>The medical question</h2>
        <p>
          From a purely clinical standpoint, the question is: Will this patient&apos;s new artificial hip
          tolerate the mechanical demands of cycling? Will it dislocate? Will it wear out faster? Will
          pain or weakness prevent participation?
        </p>
        <p>
          These are important questions, and our study of 1,115 total hip arthroplasty (THA) patients
          gives some reassuring answers:
        </p>
        <ul>
          <li>
            About <strong>73% of pre-op athletes</strong> returned to sports at one year post-op.
          </li>
          <li>
            Low-impact sports like cycling, golf, and swimming had even higher return rates (~72%),
            while high-impact sports like running and team sports were around 50%.
          </li>
          <li>
            Surgical approach (anterior, posterior, lateral) <em>did not significantly affect</em> return
            to sports rates after controlling for other factors.
          </li>
        </ul>
        <p>
          So the medical answer is mostly positive: yes, most people get back to their sports, especially
          lower-impact ones.
        </p>

        <h2>But the real question is deeper</h2>
        <p>
          What struck me most when interviewing patients and reading through survey responses was how
          much <em>athletic identity</em> mattered. For many people, being a &quot;runner&quot; or a &quot;tennis
          player&quot; or a &quot;skier&quot; is a core part of how they see themselves.
        </p>
        <p>
          One patient wrote: &quot;I didn&apos;t realize how much of my social life revolved around my weekly
          tennis group until I couldn&apos;t play anymore. Getting back on the court wasn&apos;t just about
          exercise—it was about seeing my friends and feeling like myself again.&quot;
        </p>
        <p>
          Another patient, a 58-year-old who had been a competitive swimmer in college, said: &quot;I
          wasn&apos;t expecting to set records, but I needed to know I could still feel that glide through
          the water. It&apos;s meditative for me.&quot;
        </p>

        <h2>What &quot;return to sport&quot; really means</h2>
        <p>
          When we measure &quot;return to sport,&quot; we typically ask: &quot;Did you resume participation in sport X
          at one year post-op?&quot; Binary yes/no.
        </p>
        <p>
          But that misses a lot of nuance:
        </p>
        <ul>
          <li>
            <strong>Exertion level:</strong> Some patients returned but at reduced intensity. They went
            from running 5Ks to jogging 1–2 miles. That still counts as &quot;return,&quot; but the experience
            is different.
          </li>
          <li>
            <strong>Frequency:</strong> Others returned to the same sport but less often—twice a month
            instead of twice a week.
          </li>
          <li>
            <strong>Satisfaction:</strong> The most important metric, honestly. We asked about satisfaction,
            and most returners were happy, but a small subset felt frustrated that they &quot;couldn&apos;t do
            what I used to do.&quot;
          </li>
        </ul>
        <p>
          Interestingly, about 23% of previously <em>inactive</em> patients took up <em>new</em> sports
          after THA. For them, the surgery wasn&apos;t about returning to an old identity—it was about
          reclaiming mobility and trying something they&apos;d given up years ago because of hip pain.
        </p>

        <h2>The role of expectations</h2>
        <p>
          I think one of the most important things surgeons can do is <em>set realistic expectations</em>.
          Not &quot;you&apos;ll never run again&quot; (which is often overly cautious), but also not &quot;you&apos;ll be back
          to 100%&quot; (which is overly optimistic for many patients).
        </p>
        <p>
          A better framing might be: &quot;Most people in your situation return to cycling, often at a
          similar level to before surgery. Some do more, some do a bit less. We&apos;ll work together to
          get you there safely.&quot;
        </p>

        <h2>What I learned as a researcher</h2>
        <p>
          This project taught me that <em>patient-reported outcomes</em> are often more meaningful than
          objective clinical metrics. I can measure range of motion, implant position, gait symmetry—all
          important. But if the patient doesn&apos;t feel like they&apos;ve gotten their life back, have I really
          helped?
        </p>
        <p>
          The 73% return-to-sport rate is good news, and it&apos;s important to quantify. But the richer
          story is in the qualitative feedback: the joy of a first bike ride post-op, the frustration
          of a chronic limp that won&apos;t resolve, the surprise of discovering pickleball for the first
          time at age 60.
        </p>

        <h2>Implications for practice</h2>
        <p>
          If I were counseling a patient today, here&apos;s what I&apos;d emphasize:
        </p>
        <ol>
          <li>
            <strong>Return to sport is likely, especially for low-impact activities.</strong> Don&apos;t
            assume your athletic life is over.
          </li>
          <li>
            <strong>Surgical approach matters less than you think.</strong> Focus on surgeon experience
            and implant selection, not on whether it&apos;s anterior vs. posterior.
          </li>
          <li>
            <strong>Rehabilitation and gradual progression matter more.</strong> Patients who worked
            with physical therapists and ramped up slowly had better long-term outcomes.
          </li>
          <li>
            <strong>Your goals matter.</strong> Tell your surgeon what you want to get back to. If
            it&apos;s tennis, say so. If it&apos;s just walking the dog without pain, say that. Treatment should
            be tailored to <em>your</em> life.
          </li>
        </ol>

        <h2>Final thought</h2>
        <p>
          Medicine is often framed as a science—and it is. But it&apos;s also deeply personal. The question
          &quot;Will I be able to ski again?&quot; is a scientific question about biomechanics and tissue healing.
          But it&apos;s also a human question about fear, hope, and identity.
        </p>
        <p>
          The best answer I can give, based on our data and my conversations with patients, is: &quot;Probably
          yes, and we&apos;ll do everything we can to get you there.&quot;
        </p>
      </div>
    ),
  },
]
