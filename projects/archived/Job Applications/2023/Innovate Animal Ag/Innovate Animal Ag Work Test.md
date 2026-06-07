# IAA Work Test

1. *Imagine that there was a new technology that allowed humans to understand animal language. To work, it requires the user to upload thousands of hours of high-quality audio of the species in question. After analyzing this audio, it is able to translate the animal’s vocalizations into human language. Think carefully about the challenges of commercializing such a technology, then come up with three possible business models or commercialization strategies, and discuss the pros and cons of each from a business perspective. These can be applications that have positive externalities for animals, but they don’t have to be. The important thing is just that they make money.*

**Option 1: Translation device for pet owners**
The product would be a small physical device that can be attached to the collars of pets, run the translation software on their utterances, and translate their speech in real-time. The value proposition is that pet handlers can understand and/or communicate with their pets through language. The product could potentially also be implemented as a mobile app, but this would reduce the seamlessness of the continuous translation experience.

There are several options for obtaining training data:
1. They could partner with a pet store and offer to sell the product at a discounted rate in a package with their pets in exchange to access to recordings of their pets.
2. They could purchase the rights to record and use animal vocalizations from animal sanctuaries or pet daycares.
3. They could develop algorithms to identify and download high quality pet vocalizations from publicly available online repositories such as YouTube. However, it's possible this wouldn't yield enough data, especially for rarer pets.

In terms of the payment model, I would recommend a lump sum price for the physical device plus a subscription model to enable the software on the device. Subscription models are effective at capturing consumer surplus when a company can withhold functionality after the sale of the physical product. This could be operationalized by requiring that the translation code is run on company servers (although this will reduce latency and add costs), or by requiring that the device "checks in" at given time intervals (i.e. daily). Another model could be to require a subscription for premium features, such as reverse translation or large amounts of translation.

Some pros of this model:
- The pet market is quite large and is an entertainment/lifestyle industry, meaning that people have higher willingness to pay.
- The device only needs a processor to run software and audio input/output hardware, so the marginal production cost will presumably be low. Given that the software already exists, the marginal return could be quite healthy.
- Subscription model ensures revenues in the long-term and softens [Coase Conjecture](https://en.wikipedia.org/wiki/Coase_conjecture) dynamics.

Some cons to consider:
- Accessing data may be challenging. I'm not convinced pet stores other will be willing to provide their data without exclusive sales rights to the product or large benefits, and I'm not confident that there is enough high quality publicly available data.
- The moat for this business strategy seems heavily dependent on the strength of the IP for the translation software. Presumably the physical device won't be that challenging to develop and manufacture, and there will likely be several viable sources of training data if at least one works.

**Option 2: Translation for nature documentaries and businesses**
The idea is provide translation services for nature documentaries and nature businesses such as travel companies and naturalist mobile apps. The specific product design will depend on the customer segment you are targeting. 
- For nature documentaries, you ideally want to design software that integrates directly with their video editing tools to provide real-time subtitles that can be viewed while editing. You could also include functionality that categorizes segments of animal speech into searchable topics so editors can quickly identify speech that is interesting from an editorial perspective. The software could be sold via a lump sum payment or subscription model. 
- For nature travel companies, one idea would be a mobile app that each traveler can download, but can only be used alongside a code provided by the tour guide that has an administrator account for the app. Each traveler can then record and translate animal sounds while on the tour. The app would ideally be sold to travel companies using a subscription model.
- You could also simply develop a mobile app for naturalists that can record and translate animal sounds without needing authentication through a travel company. I would recommend a subscription model for the app, but you could also do lump sum or per-translation payment methods.
	- While you might think this unlocks a bigger market than the above idea, travel companies may have a higher willingness to pay than amateur travelers, so this approach could yield lower profits.

Note that none of these ideas are mutually exclusive!

To obtain training data, you could:
- Offer zoos free translation services in exchange for access to their recording data.
	- Zoos could potentially be another customer, but you would need to figure out additional hardware to display the translations to visitors, and I suspect that presenting the animals' speech may not always be in the interest of zoos! Still, they could find the technology valuable for their internal operations, and may therefore be willing to engage in the exchange.
- Enter into a partnership with a specific nature documentary company or nature business to access their vocalization data or to collaborate on data collection. Ideally you would still be able to offer the translation service to other businesses, but it's possible that they require that it be an exclusive partnership. This would be important to consider.
- Develop algorithms to identify and download high quality animal vocalizations from publicly available online repositories such as YouTube. However, it's possible this wouldn't yield enough data for all animals, especially those that are more rarely featured on film.

Some pros of this business strategy are:
- Several commercialization pathways that can be pursued with the same underlying data.
- Software apps and integrations have very low marginal costs since you typically just need a few developers to maintain them.

Some cons of this business strategy are:
- The nature documentary market is probably quite small, and I don't expect they're able to pay a lot for this service.
- Getting consumers to pay for applications that don't solve or ease a core problem can be quite challenging, so I'm skeptical of the direct to consumer app idea.
- You are dependent on strong IP to maintain a moat, unless your integrations, APIs, or UX are in a class of their own.

**Option 3: Value-add service for animal  psychologists**
The product would be a computer program that translates animal speech to help animal psychologists diagnose psychological challenges affecting research or pet animals.

Animal psychologists need to diagnose psychological ailments in animals for research or pet care purposes. Direct access to the speech of animals could be incredibly valuable for these endeavors. The basic product would be a computer program with a simple UI that is able to record and translate vocalizations from animals. The product could be enhanced by including analysis of tones that give greater insight into animals' psychological states.

To obtain the training data, you could:
- Purchase the rights to animal vocalization data from zoos, nature documentaries, pet stores, pet daycares, or animal sanctuaries.
- Provide free access to researchers in exchange for vocalization data. Then sell to commercial pet psychologists.
- Develop an algorithm to identify and download high quality pet vocalizations from publicly available online repositories such as YouTube.

Once again I imagine that a subscription model is the best approach for extracting as much consumer surplus as possible, and for ensuring long-term revenues.

Some pros of this idea:
- Creating the software is easy and cheap, and bringing it to the final consumer is handled by an intermediary.
- I think it's likely you see large scale adoption quite quickly if you price your service affordably, as it seems hugely informative for research and diagnosis. I think pet owners in particular might start demanding the service from psychologists.

Some cons of this idea:
- Without having really looked into it, I'm not sure the animal psychologist market is that large.
- Once again, IP seems really critical, since the UI itself won't be difficult to create.
	- One way to slightly ameliorate lack of strong IP would be to create an automated pet psychologist service where users describe their pet's behavior and upload some of their vocalizations. There would then be more moat in the execution of this idea, although lack of strong IP will still mean competitors can easily replicate you.
	- Also, if you don't have IP, consumers can just translate the speech at home, which may cut into psychologists' revenues.

------

2. *Imagine the following two scenarios about the vocalization technology from prompt one. The first is that a proof-of-concept has been developed by a researcher in academia, and the researcher is interested in pushing it forward. The second is that the technology has been successfully commercialized in the companion animal space, but hasn’t yet been used in an agricultural context. For each scenario, propose one intervention that a nonprofit could develop and execute to maximize the chances that the technology helps as many animals as possible. Describe how the intervention would work, why it might be successful, and a few steps the nonprofit could take to operationalize the intervention.*

**Scenario 1**
In this scenario we want to guide the researcher in the direction of an application of the technology that benefits animals. My primary strategy would be as follows:
1. Research different ways that the technology could be commercialized to benefit animals and write business proposals for the viable ideas. The intended outcome from this task is a set of business proposals that summarize the investment worthiness and impact potential of each idea. Key information therefore includes product definition, market size, basic business model to estimate returns, and quantitative estimates of the benefits for animals.
2. Share the business proposals with the best returns and impact potential with investors who have an interest in improving animal welfare. Here, the aim is to convince investors that they should connect with the researcher to discuss founding a company to pursue one of the business directions we present. I would state this intention to them explicitly.

The intended outcome from this strategy is to cause an investor to contact the researcher and discuss forming a company around an idea with strong animal welfare benefits. The reason that I would like an investor to contact the researcher, rather than contacting them myself, is that the investor provides more value (investment and a network) and has legible motivations (making a return). In my view this improves the chances that the researcher takes the business proposal seriously and doesn't retreat due to concerns about hidden or unclear motivations. 

*Additional considerations*
I was quite tempted to deviate from the instruction to propose one intervention as I think the best response in this scenario depends a lot on the answers to three key questions:
1. Is the researcher already inclined toward a commercialization strategy that harms animals?
2. How committed is the researcher to protecting animal welfare?
3. Does the researcher have intellectual property protections for the invention?

I would therefore like to cold contact the researcher, get insight into these questions, and run through the following considerations before implementing the strategy I described above.

*On the first question*
I would be concerned if the researcher was likely to commercialize the technology in a manner that harms animal. If the application seemed sufficiently harmful, I would consider implementing obstructive measures. For instance:
- If the researcher has not already obtained or filed a patent, IAA could seek to sponsor another researcher to file a patent for an incremental improvement to the technology. Even if the sponsored researcher's claim ultimately is not granted, the dispute could scare investors for the harmful application and could slow down the harmful application by many years.
- If the researcher has obtained a patent, IAA could investigate whether they can purchase the rights to an invention on which the vocalization technology depends. The researcher would then need permission from IAA to apply their technology.

I should be clear that I would only consider taking these actions if the researcher is firmly committed to a harmful business strategy, as I recognize that they could result in serious financial and reputational costs.

*On the second and third questions*
The entity that holds the intellectual property rights to the technology ultimately controls its use. I would therefore prefer that they were in the possession of an entity committed to avoiding harmful applications of the technology. Running through the cases:
- If the researcher is strongly committed to protecting/advancing animal welfare, it seems most appropriate that they keep sole intellectual property rights. If they do not already possess the rights, I would help them identify appropriate legal assistance.
- If the researcher is not strongly committed to protecting animal welfare and the technology rights have not already been allocated, I would explore options for assigning the rights to the venture that is hopefully formed by the researcher and the animal conscious investor. In this way the investor may be able to prevent the researcher from licensing an application of the technology that may harm animals.

**Scenario 2**
*Proposed intervention: Hackathon/Competition*

In this scenario the goal is to stimulate the generate of ideas and proof of concepts for animal positive applications of the technology in the agricultural sector. A hackathon or pitch competition is an good intervention for achieving this goal.

Hackathons and pitch competitions assemble a large number of business ideas from diverse candidates and gets them to demonstrate the value and viability of the ideas through a working proof of concept or strong pitch. This approach builds in several features that are beneficial for identifying useful applications of the technology:
1. A large and diverse number of ideas improve the likelihood that the best ideas will be identified;
2. The expectation of a working proof of concept or thorough pitch naturally tests the feasibility of the idea and the strength of the potential founding team, which reduces allocation of resources towards ideas that are unlikely to succeed.

A hackathon in which participants are required to show a working proof of concept (POC) will be feasible for products whose POC consists of software and/or simple electronic hardware. However, if POCs require larger expenses, a pitch competition format in which participants develop detailed business plans and validate their ore assumptions can instead be employed.

To operationalize the hackathon/pitch competition I would:
1. Announce a call for submissions for a hackathon/pitch competition online and publicize through social media, university publications, industry publications, affiliated nonprofit newsletters, and other channels.

2. Have a selection committee of investors and farmed animal welfare experts evaluate hackathon applications. Some key criteria they will consider include:
	- Likelihood of commercial success;
	- Potential impact for farmed animals; and
	- Strength of applicant team. 
	
	Importantly, the selection committee will at this stage screen any applications that present probable downsides for farmed animals (this will be transparently stated as a selection criteria in the call for submissions). For this reason, it's important that the selection committee at this stage is familiar with and committed to farmed animal welfare considerations.
	
3. Invite selected participants to the in-person hackathon/pitch competition, and give them time to develop their idea and pitch. Participants final deliverable (MVP and/or pitch) will be judged by a panel of:
	- Investors, who can judge the investment worthiness of the proposal;
	- Farmed animal welfare experts, who can judge the potential benefit for animals; and
	- Ag industry insiders, who can judge how likely the technology is to be useful to ag industry operations.
		- Ag insiders can now be included as the process has already screened for potentially harmful ideas.
	
	Winners of the competition receive mentorship, introductions to useful contacts, and potentially seed money to further develop their idea.


-------

3. *Draft a theoretical op-ed for an animal ag industry publication about the potential of technology to improve animal welfare. Keep in mind that the people who will read the article are the people who will ultimately be making decisions about which technologies to implement.*

Growing consumer and regulatory demands for costly animal welfare standards is one of the largest challenges facing our industry. After years of vegan activism, many states and countries, including California, Massachusetts, and the entire European Union, have legislated bans on the use cage systems in animal production. Unfortunately, more activism may be on the horizon. In the last decades, vegan advocates have matured from a ragtag group of misfits into an organized, well funded collective. In 2022, [they amassed over $200 million](https://faunalytics.org/funding-dynamics-in-farmed-animal-advocacy/#) from influential sources such as Open Philanthropy. As a result of their efforts, public opinion in many countries increasingly supports the view that food companies must do more to protect animal welfare ([source](https://europa.eu/eurobarometer/surveys/detail/2996)).

The increasing mobilization of political and consumer sentiment in favor of improved animal husbandry is a trend that is likely to persist. It is unfortunate that many consumers do not understand the costs that these policies impose on themselves and on farmers, but that is the reality that we face. As such, we must ask ourselves: how can we meet consumer demands for improved animal welfare while maintaining the viability of our industry?

Other sectors facing this challenge have often turned to innovation to ease the tension between consumer demands and business imperatives. Consider, for instance, the refrigerant sector. In 1974, scientists discovered that Chlorofluorocarbons (CFCs) were eroding the ozone layer, leading to widespread criticism of CFC manufacturers, most notably chemical company DuPont. DuPont, the largest manufacturer of CFCs at the time, responded by being proactive in the search for alternatives, investing $30 million in developing alternatives starting only a few years after confirmation of the effect of CFCs on atmospheric ozone ([source](https://www.nytimes.com/1988/04/10/business/business-forum-the-chlorofluorocarbon-dispute-why-du-pont-gave-up-600-million.html)). Once public pressure culminated in the 1989 Montreal Protocol banning the future production of CFCs, DuPont stood ready with CFC alternatives, DuPont continues to dominate the refrigerant market, and has maintained its status as the world's largest chemicals company.

For too long we have rested on its laurels and let activists dictate burdensome and unhelpful practices on our profession. Instead, we must take the lead in developing, stewarding, and marketing technologies and practices that are pro welfare *and* pro business. There are indeed many burgeoning examples to choose from. In the egg industry, in-ovo sexing helps avoid the early and unseemly culling of male chicks, but has only seen meaningful adoption in Europe. In the broiler industry, [Controlled Atmospheric Stunning](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4693211/) can prevent chickens from experiencing the pain of incomplete stunning and decapitation in live shackle systems. We should be pushing to adopt these technologies in the United States in the near future. It would certainly be prudent to address these challenges before they become widely known among consumers.

New practices and technologies will always generate costs in the short term, but many of these costs recede as we obtain scale and experience with the new methods. This has been the case for cage-free systems, where increased adoption has led to a gradual decline in the mortality of hens ([source](https://www.nature.com/articles/s41598-021-81868-3)). Other technologies, such as in ovo sexing and on-farm hatching, even have the potential to be profit enhancing by increasing the yield and survivability of animals. We would be foolish to dismiss these technologies merely due to an association between welfare-enhancing practices and cost increases.

The worst thing our industry can do is wait until we have no choice but to change our practices. The egg industry's initial resistance to cage-free adoption has meant that billions of dollars of investment into caged systems suddenly became obsolete once the cascade of cage-free commitments began. Change is expensive, but abrupt, unmanaged change can destroy companies, and even whole industries. The more we do to lead the development of improved animal husbandry practices, the more secure our future will be.