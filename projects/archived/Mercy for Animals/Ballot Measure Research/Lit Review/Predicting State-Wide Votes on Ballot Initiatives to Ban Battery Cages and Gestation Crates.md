[Link to paper](https://ageconsearch.umn.edu/record/169051/files/jaae592-1.pdf).

Back to [[Overview]]

Abstract: After California voters decided in a state initiative to ban gestation crates and battery cages, some are asking whether other states will host similar initiatives and if they will pass. This study addresses this question by using voting data in California to predict how voters in other states would respond to a similar initiative. Results suggest that a number of states allow such initiatives and possess a demographic profile favorable to the initiative’s passage. However, because these states host only a small portion of the livestock population, the impact of such initiatives on the well-being of farm animals is questionable.

Notes on paper
- Illinois has very limited topics ballot measures can be proposed on: "In the top five hog-producing states, only Illinois allows initiatives. The narrow range of items an Illinois initiative can address is so limiting that it is, for practical reasons, often not even considered an initiative state. Because an Illinois initiative cannot refer to farm regulations, it is considered a noninitiative state for the purpose of this analysis." So maybe exclude from analysis.
- Nebraska is also really challenging: "Nebraska is the next largest initiative state in terms of hog production. Requirements for an initiative are daunting in Nebraska too: signatures must not only be at least 7% of all registered voters, but must exceed 5% in 38 of 93 counties; this last requirement seems impossible." However, it could be interesting to predict whether you could meet this 5% threshold in Nebraska as well.
- So you would update their methodology of using adjusted r squared to pick variables to using a LASSO model, and you would include a lot more variables initially.
- They also have a relatively low sample size of 58 California counties. Would it be possible to try these predictions at an even more granular level?
- You need to account for the fact that counties are of different sizes. In other words you need to account for the number of votes in each country. So they minimize the weighted sum of squared errors.
- Ok you can seriously improve on their model selection approach.
- The importance of religion here seems really suspicious and probably something specific to California voters.
- Are there other ways we can reduce bias in out of sample prediction? See if you can find a review paper on best practices for doing this.