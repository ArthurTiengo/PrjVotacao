let votes = {
        candidato1: 0,
        candidato2: 0,
        candidato3: 0
    };

    function vote() {
        const selectedCandidate = document.querySelector('input[name="candidato"]:checked');
        if (selectedCandidate) {
            votes[selectedCandidate.value]++;
        } else {
            alert("Por favor, selecione um candidato para votar.");
        }
    }

    function showResults() {
        const totalVotes = votes.candidato1 + votes.candidato2 + votes.candidato3;

        if (totalVotes === 0) {
            alert("Nenhum voto registrado ainda.");
            return;
        }

        document.getElementById('candidate1Result').textContent = `Candidato 1: ${((votes.candidato1 / totalVotes) * 100 || 0).toFixed(2)}%`;
        document.getElementById('candidate2Result').textContent = `Candidato 2: ${((votes.candidato2 / totalVotes) * 100 || 0).toFixed(2)}%`;
        document.getElementById('candidate3Result').textContent = `Candidato 3: ${((votes.candidato3 / totalVotes) * 100 || 0).toFixed(2)}%`;

        const winner = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
        document.getElementById('winner').textContent = `Vencedor: ${winner.toUpperCase()}`;

        document.getElementById('results').style.display = 'block';
    }