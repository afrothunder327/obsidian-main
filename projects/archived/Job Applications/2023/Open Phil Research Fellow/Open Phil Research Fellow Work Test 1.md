---
type: 
aliases:
  - 
tags:
---

## Paper Notes
- Introduction
	- "Even during the preceding off-year congressional election, TV advertising accounted for between 40% and 50% of campaigns’ budgets (Ridout et al. 2012)."
	- Apparently previous studies find few effects; we should keep that in mind.
	- They use a change in FCC regulations as a source of exogenous variation in the numebr of ads across county borders.
		- FCC grants media companies local broadcast rights for select counties called a demographic market area.
		- Candidates determine television-advertising strategies at the DMA level
			- What evidence is there for this?
	- "By comparing neighboring counties that are in the same state but assigned to different media markets, our approach relies on thousands of regulation-induced discontinuities in advertising exposure of constituents".
		- So many potential problems here worth detailing.
		- Not sure whether electorates actually watch TV, but should be aligned.
		- Will also affect other TV exposure which could affect voting
		- People may be exposed to TV outside of borders.
	- "nearly all ads are purchased at the DMA level"
		- Which ones are not?
	- Border countis only constitute about 5% of markets combined population
		- These populations could be selected for in various ways.
	- "Since ad prices and campaigns’ strategies are likely determined by aggregate, market-level factors, one would expect that a particular border county exerts only minimal influence on the decision of how much air time to buy in a given DMA."
		- This really depends. Particular counties are so much more important, and border counties may reflect other politically relevant discontinuities.
	- This should mean  expsore of counties of different side of border should be as good as random if you control for county time invariant features.
	- "An F-test fails to reject the null hypothesis that electorates’ observable characteristics are jointly uncorrelated with different measures of political advertising, with p-values ranging from .349 to .655."
		- I wish I knew whether this is good evidence... but I don't remember these tests.
	- They estimate how much each ad was actually seen by combining information on ad broadcasts with viewership information from Nielsen.
	- Apparently, correlation between ad intensity and turnout is spurious.
	- Did they use Bonferroni correction for robustness checks?
	- "A standard one deviation increase in the partisan difference in advertising, that is, the average citizen seeing about 22 more ads promoting on candidate rather than the other, increases the partisan difference in vote shares by about half a percentage point."
	- "We study the mechanisms behind this effect in a supplemental analysis relying on official turnout histories for millions of registered U.S. voters. To gauge the contribution of compositional changes of the electorate (i.e., the extensive margin) relative to effects on individuals’ preferences and opinions (i.e., the intensive margin), we implement a regression discontinuity (RD) design that compares partisans who live nearby but on opposite sides of media market borders."
		- Super skeptical.
	- They say their RD evidence suggests that partisan differences in turnout depend on partisan differences in political advertising.
	- "Although political advertising does not appear to lead to universally higher voter engagement, it alters the partisan composition of voters, which in turn affects election results."
- Literature review
	- Read later if you have time
- Media markets and political advertising in the US
	- 1992 cabel act means cable providers must carry a local broadcast station.
	- DMAs tend to be centered around the largest metropolitan areas
		- This means the border counties are more likely to be rural, right?
	- Most political advertising expenditure is directed at broadcast television.
	- Note we are interested in 2024, so you should look up how much broadcast viewership has fallen since then.
	- "online advertising accounted for less than 15% of the paid media budget of the presidential campaigns (Scola 2012; O’Connor 2015)."
		- This only speaks to cost, not to the amount of exposure achieved by each platform, as well as the efficacy.
	- "Nonetheless, targeted campaign activities that are correlated with ad buys on local broadcast TV pose a threat to our identification strategy."
		- I don't know what this means.
	- "Second, we present results that differentiate between battleground and non- battleground states. This is useful because resource constraints force presidential candidates to focus their efforts on swing states. The fact that our estimates for nonbattleground states, where campaigns have no meaningful ground game, line up with those for competitive states suggests that unobserved, targeted voter mobilization activities are not a first-order concern."
- Data and econometric strategy
	- They remove border-county pairs in different states so they have the same state-level unobservables.
	- You need to read up on the paper about continuous treatments and identification, because I don't think this meets all of the criteria.
	- "We resolve this issue by stacking observations so that a particular county appears in our sample exactly as many times as it can be paired with a within-state across-DMA neighbor. This allows us to treat μp,t as a nuisance parameter (see Dube, Lester, and Reich 2010). Stacking does not affect the intuition for how φ is identified.10""
		- Skeptical, but can't speak exactly to why.
	- They cluster for standard errors at media market borders. This is useful for addressing my concern the border discontinuity has a big effect. I think (although the paper doesn't say this)
- Notes from Table 1
	- Border-pair counties are exposed to less presidential impressions per capita than all counties, on average.
	- They also have less turnout, but apparently aggregate turnout wasn't affected.
	- Slightly more Republican leaning
	- Slightly whiter
	- More likely to be high school dropouts, less likely college educated
	- More native born
	- Lower median income
	- Poorer
	- They have much smaller voting age populations
	- Their newspaper election coverage is lower than the average county
- Political Advertising and Vote Shares
	- Table IV
		- "Taking the point estimates in columns (4)–(6) at face value, a one standard deviation increase in the partisan difference in presidential advertising— the equivalent of potential voters seeing an additional 21 spots for the Democratic candidate rather than the Republican one— increases the Democratic candidate’s vote share by about 0.49 to 0.67 percentage points relative to that of his Republican opponent."
		- Why would 
	- "We do find evidence that political ads exerted greater effects on less educated populatons"
	- Table VII
		- This is weird it seems like democratic imps. per capita increase Republican vote share, and likewise for republican impressions. So it seems like the advertising is actually polarizing the other party as well.

"Unfortunately, our identifying assumption that differences in advertising intensity are uncorrelated with differences in time-varying unobservables is fundamentally untestable"

What do they mean net number of votes?
- I take them to mean the absolute increase in the number of votes, so we don't care much about vote shares. Or at least we need to manipulate them a bit.

With the respective numbers in hand, the persuasion rate (and its standard error) is fD ≈ 0.03% (0.004%) for Democratic spots, and that for Republican advertising equals fR ≈ 0.01% ( 0.005%

"Within 60 days leading up to the 2008 presidential election, the average voting-aged citizen saw about 45 spots in support of Barack Obama and almost 30 ads favoring John McCain."

"To put the effectiveness of political advertising into perspective, we note that, leading up to the general election, Obama and McCain were estimated to have spent a combined $366 million on TV ads (Seelye 2008), which implies a cost per persuaded voter of about $170."
- Huh so they have an answer.

### Review of continuous treatment estimates
I don't really understand all the details, but it requires a strong parallel trends assumption, that the untreated potential outcomes is the same. It's a homogeneity assumption. There are two problems:
1. The treatment effect may vary depend on where we are on the curve
	1. You cover this with diminishing marginal returns.
2. There is some selection on the places that receive larger treatments. I doubt that the selection strategy is really exogenous. You could easily imagine that more political spending is targeted towards areas that are generally more persuadable. This would come from assuming a simple spatial correlation structure in persuadability, which is not hard to imagine.
3. Effects are similar in battleground and non-battleground states. This addresses the problem of time-varying unobservables, such as other campaigning, but not other axes of unobservables, such as persuadability.


I think the estimate from specification (4) is the most correct to use.

Pieces of information you need to collect for baseline BOTEC:
- How do dollars convert to votes?
	- What is the average number of votes in border counties?
	- How do dollars convert to vote shares in border counties?
	- What is the average number of votes in all counties?
	- How attenuated do I expect the effect on votes to be between border counties and all counties?
- How has exposure to local broadcast TV changed?

Impression = one voter being exposed to one advertisement.

The regressor is aggregate presidential advertising, which is the ratio of the number of impressions divided by the population of a county.

The advertising intensity metric is measured at the DMA level, not the individual county level. "Since Nielen ratings are only available at the DMA level, we assign the same advertising measurements to all counties within a given market."
- If viewing habits in border counties differ from those in the remainder of the media market, then our advertising variable is likely to contain measurement error, which would bias our estimates toward zero.


Can you assume that the ad has already been created, or that more will be created?
- Maybe do two versions with these two considerations.
- [Cost of ad (Quora)](https://www.quora.com/How-much-does-it-cost-on-average-to-create-a-political-ad): $3,000 to $30,000
- [Cost of ad (Start Motion Media)](https://www.startmotionmedia.com/commercial-video-production/commercial-video-cost-how-much-to-pay-for-commercial-video/): $7,000 to $15,000
- [Cost of ad (Marketplace.org)](https://www.marketplace.org/2023/09/21/how-much-did-that-political-ad-cost-it-depends-on-whos-paying-for-it/): 
	- For politician during Jeopardy: $400
	- For PAC during Jeopardy: $1,200
- [Cost of ad (Peoria Journal Star)](https://eu.pjstar.com/story/business/2022/03/31/political-ads-reveal-advertising-rates-local-tv-and-radio/9409310002/): 
	- During "Wheel of Fortune," a 30-second ad will run about $1,000.
	- An ad during "60 Minutes" runs $1,500,
	- while "The Price Is Right" will cost $350. A spot during local news will run between $450-$500.
- [Cost of ad national TV (Kobe Digital)](https://kobedigital.com/how-much-does-it-cost-to-advertise-on-national-tv/):
	- Between $100,000 to $8,000,000
	- Says 30 second ad costs $342,000
- [Cost of ad national TV (WebFX)](https://www.webfx.com/digital-advertising/pricing/cost-to-advertise-on-national-tv/)
	- Also says 30 second ad is $350,000 ish
This study identifies the average treatment effect, whereas we are interested in the marginal treatment effect.


![Decline in TV | 500](https://www.pewresearch.org/wp-content/uploads/2023/11/SR_23.11.28_SOTNM_2.png)

So I would use this chart to estimate the decline in viewership.


Ok I need to step back to think about this model

Let's backchain it.

We want to find net increase in voters from spending.

[This paper](http://chriswarshaw.com/papers/advertising.pdf) finds that the effects of political advertising on presidential elections is quite a bit smaller.
- "To be sure, these calculations of advertising e↵ects and the implied cost-per-vote assume that the marginal returns to advertising are constant—that is, they do not diminish as the number of ads aired in a race increases. Figure 3 suggests that advertising advantage does have a fairly linear relationship with vote share. In Appendix E, we examine this question in more detail and find little apparent evidence of diminishing returns. Only at very high levels of advertising do there appear to be diminishing returns. But even at these high levels, vote share is almost always increasing at the margins, suggesting that candidates are still getting something for their dollar"
- So I think you should 
- If you look at Figure A3 it looks like there are basically no diminishing returns to ad expenditure in presidential elections. Curiously you actually find that Republican campaigns increase the democratic vote share ― presumably because Trump mobilizes Democrats. 
- Also another media market map in this paper on page 13, which you can use inform your estimate of the number of counties per media market.
- Based on election data from 2008-2018.

[This source](https://www.pewresearch.org/journalism/fact-sheet/cable-news/?tabId=tab-34586070-62b9-4c4f-b51d-d2192c3f9095) says shows cable news viewership has fallen somewhat, but not by a lot. 

to do:
- Finish basic estimation
- start writing up procedure
- characterize uncertainty
- include geometric series correction for size of population after persuasion up to $100,000 budget
- read paper on continuous treatment identification to discuss paper limitations.
- Include correction for the difference in the characteristics between border-county populations and the general population.
- Write that you are assuming that you will not be spending money on developing a new ad since it's an additional $100,000, although this would be possible to estimate as well.
- Make sure all of the low, middle, highs are actually low middle highs.
- Comment on F-test and empirical strategy
- Battleground states
- 