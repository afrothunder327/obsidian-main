[Paper](https://www.mdpi.com/2071-1050/11/13/3667)

Back to [[Overview]]

Abstract: In November 2016, Washington State voters were presented with a ballot initiative (Initiative 732) advancing the first carbon tax on production and use of fossil fuels in the United States. Initiative 732 promised to reduce fossil fuel consumption by taxing carbon emissions, while remaining revenue-neutral by lowering taxes on businesses, consumers, and working families. In promising revenue-neutrality, Initiative 732 sought support beyond environmentalists and similarly sympathetic voters. It failed to pass, achieving 41.2 percent of votes cast. To investigate this initiative’s failure at the ballot, we analyzed zip code-level voting patterns and demographic data. Relying on a two-step LASSO (Least Absolute Shrinkage and Selection Operator) + OLS (Ordinary Least Squares) procedure, our results suggest that the framing of revenue-neutrality did not sufficiently satisfy moderate right-leaning voters regarding perceived costs of the carbon tax. We also found evidence suggesting not only that some voting segments may have opposed revenue-neutrality, but that those facing higher climate change risk did not appear to see the initiative’s value net of expected costs.

Notes:
- "While polls are useful—as expressions of stated preference—they are distinct from the revealed preference process of secret-ballot voting. Polls may not reveal how social, economic, or demographic factors were useful in predicting the eventual outcome. (Two of the better post-election survey papers are those of Fischel [28] and Thalmann [29])."
- I think you have a lot of work you can do here actually



#### Brief Summary
Washington State's 2016 Ballot Inititative on implementing a carbon tax failed, achieving only 41.2% votes in favour. The paper uses zip code data from the ACS and merge it with data on votes from WA zip codes. They also find some variables that they think could be relevant from outside the zip codes which they merge into the data. They then use LASSO to obtain a parsimonious model of most explanatory variables. They then take the selected variables and run OLS to obtain variable coefficients.

What I don't see them doing is using this to obtain likelih