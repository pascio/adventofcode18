var Ims = require('../../2/InventoryManagementSystem');

describe('InventoryManagementSystem', function() {
    it('should be able to produce a checksum', function() {
        // Arrange
        // var input = ["evsialkqydurohxqpwbcugtjmh","evsialkqydurohxzssbcngtjmv","fvlialkqydurohxzpwbcngujmf","nvsialkqydorohxzpwpcngtjmf","evsialjqydnrohxypwbcngtjmf","vvsialyqxdurohxzpwbcngtjmf","yvsialksydurowxzpwbcngtjmf","evsillkqydurbhxzpmbcngtjmf","ivsialkqyxurshxzpwbcngtjmf","ejsiagkqyduhohxzpwbcngtjmf","evsialkqldurohxzpcbcngtjmi","evsialkqydurohxzpsbyngtkmf","ersialkeydurohxzpwbcngtpmf","evsialuqzdkrohxzpwbcngtjmf","evswulkpydurohxzpwbcngtjmf","evsialkqyiurohxzpwucngttmf","evtialkqydurphxzywbcngtjmf","evsialkzyiurohxzpwbcxgtjmf","evsiaykqydurohxzpwbcggtjuf","evxqalkqydurohmzpwbcngtjmf","eisralkqydurohxzpdbcngtjmf","evsfalkqydurohxzpwbangtjwf","evbialkqydurohxzawbcngtjmg","evsialkqydrrohxrpcbcngtjmf","evsialkqycurohxzpvbcngtjkf","evsialkqsdudohxzpwbcnotjmf","evsiackqydurohxzpmbsngtjmf","evsialmqykurohxzpwbfngtjmf","evsialsqydurohxzpwucngtjxf","tvsialkqyeurohxzpwbcrgtjmf","zvsialkqydbrohxzpwbcnltjmf","evsmbskqydurohxzpwbcngtjmf","evsialkqydurohxzpwbcngpgmt","evsialkqydurlyezpwbcngtjmf","evoialkqyturohxzpwbcnjtjmf","evsialkqydurohxspkfcngtjmf","evsiaikqydurohxjpwbcngtjmd","evsialkyydurohxzvwbcngtjmc","svsialkqyduhohxzpwbhngtjmf","eysillkqydurohxzhwbcngtjmf","evsialkqyduetaxzpwbcngtjmf","evsialkqxdurshxzpwbcngtjmb","evsiadkqydwrovxzpwbcngtjmf","evsialkqydurokxzpwbcngjjef","evskalkqymurohxzpybcngtjmf","cvsialkqydurohxzpwbcnbtjma","evsialkqydurohxzawhcngtjuf","evsiahkqfduroixzpwbcngtjmf","evsivlkqyduroqxzpwbctgtjmf","evsiarkqyduroixzywbcngtjmf","evspalkqydurohxzpwlcngxjmf","eesialkqydurohxzpalcngtjmf","gvsualkqydurohxzpwbmngtjmf","evsialkqydurlhxzpwbcngsjmq","evsialhqydfrohxopwbcngtjmf","evzialkqydsrohxzpwbcngtjmw","evbpalkqydurbhxzpwbcngtjmf","mvsialkqydurohxzpwbcnghjmr","evsialkqsdurohxzpkbcngtjxf","ejkialktydurohxzpwbcngtjmf","evsialkqyauoohxzpwbqngtjmf","evsiklkyyduroqxzpwbcngtjmf","evgialkqydurohxzpwocngthmf","ebsialkqydcrohxzpwbcngtbmf","evsialkqysurohxzpwfingtjmf","evsialkqddurmhxzpwbnngtjmf","evsialkqydurohxoiwwcngtjmf","evsialkqydurohpzkzbcngtjmf","vvsealkqydurorxzpwbcngtjmf","evsialkqyduroqxzpwlungtjmf","eviialkqiyurohxzpwbcngtjmf","evzsalkqyaurohxzpwbcngtjmf","exsialkqydurohfzpwbwngtjmf","evsialkqyduruhxkpwbcnytjmf","essiatkqydurohxzpwbxngtjmf","evsialkqyduroamzpwbcngtjcf","wvsialkqyduruhxzpwbcnxtjmf","evsialkqydurohxgpwbcngtjeh","evsialfqxdurohxzpwbcngtomf","evsialkqyourghxzpwbcngtbmf","evsoaokqydurohxzpwbcngtamf","evsialpqydurohxzpwccxgtjmf","evsialkqzdurxhxgpwbcngtjmf","ezsialkqmdurohxzpwbcngtjmi","cvsialjeydurohxzpwbcngtjmf","evsialkqydurocxupwbcvgtjmf","evscalkqydtrohxzpebcngtjmf","evjialkqyduiohxzpabcngtjmf","evsialjqyduruhxzppbcngtjmf","evsialkqydurfhxzpwbcuqtjmf","evsialkqyiurohizpwucngttmf","evsialiqydurrhxzpwbcngdjmf","evbialkqywurohxzpwhcngtjmf","evsialkqyduloyxzpwbqngtjmf","evsialxqyduzohxzpwbqngtjmf","vvsialkqydurohxzpwbcnqpjmf","evsialksydurohxzcwbmngtjmf","pvsialkqydurohxzpwucngtjvf","evsialkqydurohmkpwbcngtfmf","mvsialkqydurphyzpwbcngtjmf","evsialkqydyrohxzhwbcnitjmf","evsialokydurozxzpwbcngtjmf","evsialkqyduroexfcwbcngtjmf","evsiavkqydurohxzpwbcnmtjme","evsiawkqydurohxzpwbcngojjf","evsialkaydurohxzpwfcngtjff","evsialkaydurohxzpwbcngtjpb","gvsialkqyburorxzpwbcngtjmf","evszalkqydurphxzpwocngtjmf","evsualkqyduropxzpwbcngejmf","evsitlkqydurshxzpwbcngtkmf","evbixlkqydrrohxzpwbcngtjmf","elsialkqydprohxzpwbcngtrmf","evsialkqydurohbzpwbcggtjmc","evtoalqqydurohxzpwbcngtjmf","evsralhqydurohxzowbcngtjmf","evsialkhydurohxzlsbcngtjmf","evsialkqydurohxvpwbcnuujmf","evsialkqydurocxzuwbcngtjmi","evsialkqndyrokxzpwbcngtjmf","evsialkqydurywfzpwbcngtjmf","evsialkqydurohxzwwbcngthms","eqsiahkqydurohxzpwbyngtjmf","evsdalkqydurohxzpwbcnjkjmf","evsialkqyddrohplpwbcngtjmf","evshalkqydurohxzpfxcngtjmf","evvialkqydurohxapwbcngtjmh","evsialkqyduvohxzpwbcnnvjmf","evsiblkqedurohxzpwbkngtjmf","evsvalkqfdutohxzpwbcngtjmf","evsialjqydurohxzpwbcnctjsf","evsialkxywurohxdpwbcngtjmf","evsiagkqydurohxzpwzcjgtjmf","ebsialkqydurohxzpxfcngtjmf","evsialkqysfrohxzpwbcngtjlf","evvialkqyqurwhxzpwbcngtjmf","evxialkqydurohxzpwgcnrtjmf","vvsillkqydurohxzpwbcvgtjmf","evsiwlkqyduoohxzpwbcngtjxf","evsialkqypurohezpwbcngtjwf","evbialkqydurohxipwbcnftjmf","evsiakkqyduyohxzpwbcngtjmu","evsialkqydurohzzpwxqngtjmf","evsialkqykurkhxzpwocngtjmf","dvriplkqydurohxzpwbcngtjmf","evsialkqgdurohxzpwbmnctjmf","evsialkqyuurohxzpwtcngtjmj","wvsialkqydurohxzpwbchgejmf","eusimlsqydurohxzpwbcngtjmf","evsialkqydqrohxzhwbcngtjmh","wvswalkqydurohxzpwbcngjjmf","evsialkqyourohxzkwbcngttmf","evaialkqydurohxzbubcngtjmf","evfialkqydueohxzpwbclgtjmf","evrialkqydurohxzpwbcnctjmh","evsiaojqydxrohxzpwbcngtjmf","evsualkqywuxohxzpwbcngtjmf","evsialkdydrzohxzpwbcngtjmf","evlialkqyfurohxzpwbcnotjmf","epsialkqydujohxzpwbcngtjif","evsialkqyaucohxgpwbcngtjmf","lvsialaqydurohxzpwbcngtjzf","evsialkgydurohezpwbcngtjmo","lvsialkqydurosxwpwbcngtjmf","evsiaekqyqurohxzpvbcngtjmf","evsiapkqydirohxzpwbzngtjmf","zvsixlkwydurohxzpwbcngtjmf","evaialkqyduoohxzpwbcngtjkf","evsialcqedurohxzpwbcngtjmc","evjialkgydurohxzpwbwngtjmf","evsialkqcdurohxzpwbcpgojmf","evsialkqkdurohxzlwbcngtrmf","eosiylkzydurohxzpwbcngtjmf","evsialkqydurohhzpwscnmtjmf","evsiallqydurobxzpwbxngtjmf","evsialkqydurohwztwhcngtjmf","evsiallqydurohxzpwbcygjjmf","evsiabkqywurohxzpwbcngtjmy","evsiackqydzrohxznwbcngtjmf","evsiazkqzdurooxzpwbcngtjmf","evsialcqydurghxzpwbcngtjmc","yvsiaxkqydurohxzpwbcxgtjmf","evsiylkqgdhrohxzpwbcngtjmf","lvsialkqydurohxgcwbcngtjmf","evsiglkqydurohxzpwbvngzjmf","evsialkqyvurohxzpwbcngtjnz","evsialkgydueohxzpwbcpgtjmf","cvsiavkqyddrohxzpwbcngtjmf","evsialklyrurohxzpwbcngtjff","eisialkqyduwohxzpwbcngcjmf","evsialkqydrrihwzpwbcngtjmf","easialkqydurohxzpwbcnltrmf","evsialfqydurohxzpybcnytjmf","eqsialkqycurohxzywbcngtjmf","evsitlkqmdurohxzpwbcngtjmx","evsiclsqyduroixzpwbcngtjmf","elsialrqydurohxzpwmcngtjmf","evsiapkqodurohxzpwbcogtjmf","evstalkeydurohxzpibcngtjmf","evsihlkqyqurohxzpwblngtjmf","euszalkqydurohxipwbcngtjmf","ezsialksydurohxzpwbcngfjmf","eisialkdydurohxzpwbcngtumf","evsirlkaydprohxzpwbcngtjmf","evsiklkqydnrohxzpwbcngtjmu","evsialkqydnuohxzpwbcngtjmu","eksialkqydurohxztwfcngtjmf","evlialkqedurohxzpwbhngtjmf","evqialkqydurohxzpubcngtjpf","evsialkwydurohwzpwbcnmtjmf","evsiaokqcdurohxzpwbcngtjcf","evsialkkyfurohxzpvbcngtjmf","evsialkqyduromxzpwqcngtimf","evsialkqydumohxzpwbcnmtjsf","evsialddydurehxzpwbcngtjmf","evsialkqydurohxzpobcnptjmk","evsiagkqydurohhzpwbcxgtjmf","evsfalkqydurohszpwbangtjmf","evgialkzyduqohxzpwbcngtjmf","evaialkqzdurohxzpwbcngtjmo","evsialkqyqurohxjpwbcnntjmf","evsialkjydybohxzpwbcngtjmf","evskalgqydurohxzrwbcngtjmf","evsialkqydurohxzpjbcymtjmf","evsialkqqdurohxzpybcngtjyf","evsialkqydqrbhxzpwbcngtjmj","evssalaqrdurohxzpwbcngtjmf","mvsialkfydurohxzpwbcngtjmk","evsialkqwdurohxzpwgcngtjdf","evqkalkqydurohxzpwbcngajmf","evbialkqydurohxzpibcngejmf","evszalkqydurbhxzpwbcngtjsf","evsialkqydurohxepwbcngtjjo","evsialkqcdubmhxzpwbcngtjmf","evsiarkqyduroaxzpwbcngtjmp","evsiakkqyduzohczpwbcngtjmf","evtualkqydurofxzpwbcngtjmf","ejsialkqvdurohzzpwbcngtjmf","evsialkqydurohczpwbcngqvmf","svsianfqydurohxzpwbcngtjmf","evsialiqydurohxzpwbcngzqmf","ejsialhqydurohxzpwjcngtjmf","evpialkqydurohxzpwbcnbtjff","evsialkuyvurohxzpwbcngtjkf","eqsialkqydurohxzpwbcnwtcmf","evsiatkqydkrohxzpwkcngtjmf","evsialkqydurohxzpebciytjmf","evsialkqydrrohxzpwtcngtfmf","evsialkqjducohxzpwycngtjmf","evsialkqydurohxzpwicnxtjnf"];
        var input = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'];
        var testee = new Ims();
        var expectedResult = 12;
        // Act
        var result = testee.calculateChecksum(input);
        // Assert
        expect(result).toBe(expectedResult);

    });

    describe('checkMultiples', function() {
        it('should be able to find double and triple characters in strings', function() {
            // Arrange
            var input = 'bababc';
            var testee = new Ims();
            var expectedResult = [true,true];
            // Act
            var result = testee.checkMultiples(input);
            // Assert
            expect(result).toEqual(expectedResult);
        })
    });

    describe('findSimilarBoxes', function() {
        it('should be able to find similar IDs', function() {
            // Arrange
            var input = ['abcde','fghij','klmno','pqrst','fguij','axcye','wvxyz']
            var testee = new Ims();
            var expectedResult = 'fgij';
            // Act
            var result = testee.findSimilarBoxes(input);
            // Assert
            expect(result).toEqual(expectedResult);
        })
    })

    describe('compareStrings', function() {
        it('should compare two strings and find how many characters differ', function() {
            // Arrange
            var input1 = 'fguij';
            var input2 = 'fghij';
            var testee = new Ims();
            var expectedResult = [2];
            // Act
            var result = testee.compareStrings(input1, input2);
            // Assert
            expect(result).toEqual(expectedResult);
        })
    })
})