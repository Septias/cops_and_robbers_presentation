
- As an application of Theorem 5, consider the game of Cops and Robber on a reflexive graph $G$ with a fixed positive number $k$ of cops.
- The graph $G_E$ is the reflexive graph $G$ and the graph $G_P$ is the $k$-fold categorical product of $G$ with itself.
- We can take $f_P$ and $f_E$ to be the maximum degree of $G_P$ and $G_E$, respectively.
- Hence, $f_P$ is $O(n^k)$ and $f_E$ is $O(n)$.
- Finally, $|\mathcal{F}| = 2n^2$ and $|\mathcal{P}_E \times \mathcal{P}_P| = n^{k+1}$.
- Thus, given $G_P$ and $G_E$, we can decide if the Pursuer has a winning strategy, and the length of the game assuming optimal play, in time $$O(n^{k+1}(n \cdot n^k))=O(n^{2k+2}).$$
- Note, however, a succinct description of the game would consist only of the graph $G$ on $n$ vertices. The graph $G_P$ would need to be constructed, which can be accomplished in time $O(n^{2k})$. The overall complexity does not change because $$O(n^{2k} +n^{k+1}(n \cdot n^k))=O(n^{2k+2}).$$ The bound $O(n^{2k+2})$ for determining if the cops have a winning strategy. This
matches the bound on the complexity of the algorithms presented in \cite{bcp,HM}. Note that if $k$ is not fixed, then determining if $k$ cops have a winning strategy in Cops and Robbers is **EXPTIME**-complete.

