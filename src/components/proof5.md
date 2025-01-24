- We describe an algorithm to determine if the Pursuer has a winning strategy in a position independent game.
- Define the matrix $\mathcal M_{\mathcal G}$, with rows indexed by elements of $\mathcal P_P$ and columns indexed by elements of $\mathcal P _E$, to record the sequence of relations.
- If $(p_P, q_E) \in \mathcal F$, then the  $(p_P, q_E)$ entry of $\mathcal M_{\mathcal G}$ is zero. For $i > j$, the $(p_P, q_E)$ entry of $\mathcal M_{\mathcal G}$ equals $i$ if for every $x_E \in N^+\_{G\_E}(q\_E)$, there exists $y_P \in N^+\_{G_P}(p_P)$ such that the $(x_E, y_P)$ entry
of $\mathcal M_{\mathcal G}$ equals $j$.
- The matrix $\mathcal{M}_{\mathcal{G}}$ has $|P_P \times P_E|$ entries.
- For all positive integers $i$, and until no entries in the matrix change, each entry in $\mathcal{M}_{\mathcal{G}}$ not yet assigned a value must be tested to see if it can be set to $i$.
- It may happen that for each $x_E \in N^+\_{G_E}(q_E)$, there exists $y_P \in N^+\_{G_P}(p_P)$ such that the $(x_E, y_P)$ entry of $\mathcal M_{\mathcal G}$ equals $j < i$.
- For each $i$ we can update $\mathcal{M}_{\mathcal{G}}$ row-by-row.
- By Corollary 4 the Pursuer has a winning strategy if and only if every entry of $\mathcal M_{\mathcal G}$ is eventually assigned a value.
- By definition of the sequence of relations, one can conclude that the Pursuer has a winning strategy as soon as some row of $\mathcal M_{\mathcal G}$ has a value for each entry.  More information can be obtained by filling in the entire matrix.
- By Corollary 2, the length of the game, assuming optimal play, is $\max_{p_P \in \mathcal P_P} \,\min_{q_E \in \mathcal P_E}\quad \mathcal M_{\mathcal G}(p_P, q_E).$

