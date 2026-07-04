/* ---------- DADOS ---------- */
const TOPICS = {
  paridade:    { label: "Paridade simples e bidimensional", videos: [] },
  hamming:     { label: "Código de Hamming", videos: ["FGAU2_F_m-0", "3hY5IYVsNn4"] },
  crc:         { label: "CRC (Cyclic Redundancy Check)", videos: ["_NkXZekQsQk", "g_ffY5pRdco"] },
  osi:         { label: "Modelo OSI e TCP/IP", videos: ["b2lN3RnSRwU", "bmgvIlvVAlc"] },
  dispositivos:{ label: "Dispositivos de rede", videos: ["BmBPhA5b-Lc", "X6nwnKIooWg"] },
  topologias:  { label: "Topologias de rede", videos: [] },
  ethernet:    { label: "Ethernet e endereçamento MAC", videos: ["nZan2yTamJw", "4cWEv4fJUxI"] },
  cabeamento:  { label: "Cabeamento (par trançado, coaxial, fibra)", videos: [] },
  wireless:    { label: "Redes sem fio (Wi-Fi, Bluetooth)", videos: ["aCSCl9fOTv4", "yDp_ms_Cu2M"] },
  ondas:       { label: "Ondas e som (física)", videos: ["HzN5-2Pn1E0", "760Gkg7Bt2w"] },
  midia:       { label: "Áudio, imagem e vídeo (formatos)", videos: [] },
  satelite:    { label: "Comunicação via satélite", videos: [] },
  fibra:       { label: "Fibra óptica e comunicação óptica", videos: [] },
  propagacao:  { label: "Tempo de propagação e RTT", videos: ["vTUucZuKUEs", "kkUfUeE14pI"] },
  acesso_meio: { label: "Controle de acesso ao meio e domínios de colisão", videos: [] }
};

const QUESTIONS = [
{topic:"paridade", q:"O método de paridade simples consegue detectar erros em quantas posições de bits alteradas?", opts:["Apenas 1 bit","Qualquer quantidade par de bits","Qualquer quantidade ímpar de bits","Até 3 bits"], correct:2, exp:"A paridade simples detecta quantidades ímpares de bits errados (1, 3, 5...). Erros em quantidade par se cancelam e passam despercebidos."},
{topic:"paridade", q:"A verificação de paridade bidimensional, comparada à paridade simples, tem como vantagem:", opts:["Corrigir o erro automaticamente","Identificar qual bit está errado","Detectar erros em qualquer quantidade de bits","Não precisar de bits extras"], correct:1, exp:"A paridade bidimensional cruza paridade de linhas e colunas, permitindo apontar a posição exata do bit com erro — mas não corrige."},
{topic:"paridade", q:"A paridade bidimensional consegue detectar erros em quantos bits, segundo o material?", opts:["Só 1 bit","1, 2 ou 3 bits","Qualquer quantidade","Apenas bits pares"], correct:1, exp:"O material mostra que a paridade bidimensional detecta erros em 1, 2 ou 3 bits simultâneos."},

{topic:"hamming", q:"No Código de Hamming, os bits de paridade ficam nas posições:", opts:["Múltiplos de 3","Posições que são potências de 2 (1, 2, 4, 8...)","Sempre nas duas primeiras posições","No final da palavra"], correct:1, exp:"Bits nas posições 1, 2, 4, 8, 16... (potências de 2) são os bits de paridade; os demais são bits de dados."},
{topic:"hamming", q:"Para calcular o bit de paridade p2, qual técnica é usada (regra do \"pega e pula\")?", opts:["Pega 1 bit, pula 1 bit","Pega 2 bits, pula 2 bits","Pega 4 bits, pula 4 bits","Pega todos os bits"], correct:1, exp:"p1 pega/pula de 1 em 1, p2 pega/pula de 2 em 2, p4 pega/pula de 4 em 4, e assim por diante."},
{topic:"hamming", q:"Um código de Hamming com 4 bits de dados gera uma palavra codificada de quantos bits?", opts:["4","7","8","11"], correct:1, exp:"É o Hamming (7,4): 4 bits de dados + 3 bits de paridade = 7 bits totais."},
{topic:"hamming", q:"Se, ao verificar a paridade recebida, todos os bits de paridade calculados forem zero, isso significa que:", opts:["Houve erro não detectável","A palavra foi recebida corretamente","Há 2 bits errados","É necessário reenviar"], correct:1, exp:"Paridades calculadas todas iguais a zero indicam que a palavra chegou sem erro."},
{topic:"hamming", q:"Se os bits de paridade calculados forem p8=0, p4=1, p2=0, p1=1, em qual posição decimal está o bit com erro?", opts:["Posição 3","Posição 5","Posição 9","Posição 10"], correct:1, exp:"Juntando p8 p4 p2 p1 = 0101 em binário, que corresponde a 5 em decimal — o bit 5 está com erro."},

{topic:"crc", q:"No cálculo de CRC, a operação de subtração da divisão binária tradicional é substituída por:", opts:["Soma normal","Multiplicação","XOR (ou exclusivo)","Complemento de 2"], correct:2, exp:"A divisão do CRC usa XOR no lugar da subtração, o que simplifica a implementação em hardware binário."},
{topic:"crc", q:"Antes de calcular o CRC, quantos zeros são adicionados aos dados originais?", opts:["Um número fixo de 8 zeros","Igual ao número de bits do gerador menos 1 (r)","O dobro do tamanho dos dados","Nenhum, o gerador já compensa"], correct:1, exp:"Adiciona-se r zeros à direita dos dados, onde r é o grau do polinômio gerador (equivalente a D * 2^r)."},
{topic:"crc", q:"No receptor, como se verifica se a mensagem chegou sem erro usando CRC?", opts:["Comparando o tamanho da mensagem","Dividindo a mensagem recebida pelo gerador e verificando se o resto é zero","Somando todos os bits","Verificando se o CRC é par"], correct:1, exp:"Se o resto da divisão (mensagem + CRC) pelo gerador for zero, a mensagem foi recebida corretamente."},
{topic:"crc", q:"O bit mais significativo (mais à esquerda) do polinômio gerador do CRC deve obrigatoriamente ser:", opts:["0","1","Igual ao último bit dos dados","Par"], correct:1, exp:"Por definição, o bit mais significativo do gerador é sempre 1."},

{topic:"osi", q:"Quantas camadas tem o modelo OSI?", opts:["4","5","7","8"], correct:2, exp:"O modelo OSI tem 7 camadas: física, enlace, rede, transporte, sessão, apresentação e aplicação."},
{topic:"osi", q:"Qual camada do modelo OSI é responsável pela transmissão bruta de bits pelo meio físico?", opts:["Camada de aplicação","Camada de enlace","Camada física","Camada de transporte"], correct:2, exp:"A camada física (camada 1) trata da transmissão de bits brutos pelo meio físico (cabo, fibra, ar)."},
{topic:"osi", q:"O modelo TCP/IP, comparado ao OSI, tem quantas camadas?", opts:["7","5","4","3"], correct:2, exp:"O TCP/IP condensa as 7 camadas OSI em 4: acesso à rede, internet, transporte e aplicação."},
{topic:"osi", q:"O encapsulamento de dados, ao descer pelas camadas, faz com que cada camada:", opts:["Remova cabeçalhos","Adicione seu próprio cabeçalho aos dados","Criptografe os dados","Ignore os dados da camada anterior"], correct:1, exp:"Cada camada adiciona seu próprio cabeçalho (encapsula) aos dados recebidos da camada superior."},
{topic:"osi", q:"A camada de transporte do OSI corresponde, no modelo TCP/IP, à camada de:", opts:["Internet","Transporte","Aplicação","Acesso à rede"], correct:1, exp:"A camada de transporte existe em ambos os modelos com a mesma função geral."},
{topic:"osi", q:"A camada de enlace de dados do OSI é dividida pelo IEEE em quais duas subcamadas?", opts:["TCP e IP","LLC e MAC","Física e Lógica","Rede e Sessão"], correct:1, exp:"O IEEE divide a camada de enlace em LLC (Logical Link Control) e MAC (Media Access Control)."},

{topic:"dispositivos", q:"Qual dispositivo opera na camada física (camada 1) e apenas repete o sinal para todas as portas?", opts:["Switch","Roteador","Hub","Bridge"], correct:2, exp:"O hub é um repetidor multiporta simples que opera na camada física, sem inteligência sobre o destino dos dados."},
{topic:"dispositivos", q:"O switch é considerado mais inteligente que o hub porque:", opts:["Tem mais portas","Usa o endereço MAC para encaminhar dados só para o destino","Opera na camada de rede","Não precisa de energia"], correct:1, exp:"O switch mantém uma tabela de endereços MAC e envia os dados apenas para a porta correta, reduzindo tráfego desnecessário."},
{topic:"dispositivos", q:"O roteador opera em qual camada do modelo OSI?", opts:["Camada 1 (Física)","Camada 2 (Enlace)","Camada 3 (Rede)","Camada 7 (Aplicação)"], correct:2, exp:"Roteadores tomam decisões de encaminhamento com base em endereços IP, que pertencem à camada de rede (camada 3)."},
{topic:"dispositivos", q:"Qual é a principal função de um roteador?", opts:["Repetir sinais elétricos","Conectar redes diferentes e encaminhar pacotes usando IP","Amplificar o sinal de Wi-Fi","Armazenar arquivos"], correct:1, exp:"Roteadores interligam redes distintas (por exemplo, LAN e internet) e decidem o caminho dos pacotes com base no IP de destino."},
{topic:"dispositivos", q:"Uma bridge (ponte) atua principalmente em qual camada?", opts:["Física","Enlace","Rede","Transporte"], correct:1, exp:"A bridge opera na camada de enlace, filtrando tráfego entre segmentos de rede com base em endereços MAC."},

{topic:"topologias", q:"Na topologia em estrela, todos os dispositivos se conectam a:", opts:["Um único cabo compartilhado","Um ponto central (hub ou switch)","Um anel fechado","Todos os outros diretamente"], correct:1, exp:"Na topologia estrela, cada dispositivo tem um cabo próprio até um concentrador central."},
{topic:"topologias", q:"Uma desvantagem da topologia em anel é:", opts:["Alto custo de cabeamento","Falha em um nó pode comprometer a rede inteira","Não permite muitos dispositivos","Não existe mais na prática"], correct:1, exp:"Como os dados circulam de nó em nó, a falha de um único nó pode interromper a comunicação de toda a rede (em anéis simples)."},
{topic:"topologias", q:"A topologia em barramento usa:", opts:["Um cabo central compartilhado por todos os dispositivos","Um switch central","Múltiplos anéis","Fibra óptica exclusivamente"], correct:0, exp:"Na topologia em barramento (linear), um único cabo backbone é compartilhado por todos os dispositivos da rede."},

{topic:"ethernet", q:"O endereço MAC é representado normalmente em qual formato numérico?", opts:["Decimal","Hexadecimal","Octal","Binário puro"], correct:1, exp:"Endereços MAC são exibidos em hexadecimal por serem mais compactos e fáceis de ler que binário puro."},
{topic:"ethernet", q:"O protocolo de acesso ao meio usado pela Ethernet tradicional é:", opts:["Token Ring","CSMA/CD","TDMA","FDMA"], correct:1, exp:"A Ethernet clássica usa CSMA/CD (Carrier Sense Multiple Access with Collision Detection)."},
{topic:"ethernet", q:"A Ethernet tradicional é descrita como \"sem conexão\" porque:", opts:["Não usa cabos","Não há apresentação (handshake) entre origem e destino antes de enviar","Não tem endereço MAC","Usa apenas Wi-Fi"], correct:1, exp:"Não há negociação prévia entre as NICs de origem e destino antes do envio dos dados."},
{topic:"ethernet", q:"Quantos bits tem um endereço MAC?", opts:["32 bits","48 bits","64 bits","16 bits"], correct:1, exp:"Um endereço MAC tem 48 bits, geralmente representados como 12 dígitos hexadecimais."},

{topic:"cabeamento", q:"Qual tipo de cabo é totalmente imune a interferência eletromagnética?", opts:["Par trançado","Coaxial","Fibra óptica","Nenhum"], correct:2, exp:"Por transmitir luz em vez de sinais elétricos, a fibra óptica não sofre interferência eletromagnética."},
{topic:"cabeamento", q:"Uma desvantagem do cabo de par trançado é:", opts:["Alto custo","Suscetibilidade a interferência eletromagnética","Impossibilidade de uso em Ethernet","Peso excessivo"], correct:1, exp:"Por ser um condutor metálico, o par trançado é mais suscetível a ruído e interferência eletromagnética que a fibra."},
{topic:"cabeamento", q:"O cabo coaxial, comparado à fibra óptica, é:", opts:["Mais rápido e mais caro","Mais lento, porém mais barato e fácil de instalar","Imune a interferência","Usado exclusivamente em Wi-Fi"], correct:1, exp:"O coaxial tem menor capacidade de transmissão que a fibra, mas custo e instalação mais simples."},
{topic:"cabeamento", q:"Um cabo rollover é usado principalmente para:", opts:["Conectar dois switches","Conectar uma estação ao console de um roteador ou switch para configuração","Ligar dois computadores diretamente para transferir arquivos","Substituir a fibra óptica"], correct:1, exp:"O cabo rollover inverte os pinos de ponta a ponta e serve para acessar a porta de console de equipamentos de rede."},

{topic:"wireless", q:"O Bluetooth é classificado como uma rede do tipo:", opts:["WLAN","WPAN (rede pessoal sem fio)","WMAN","WWAN"], correct:1, exp:"O Bluetooth é o exemplo clássico de WPAN, cobrindo curtas distâncias entre dispositivos pessoais."},
{topic:"wireless", q:"O Wi-Fi (padrão 802.11) é usado principalmente para redes do tipo:", opts:["WPAN","WLAN","WWAN","Rede celular"], correct:1, exp:"O Wi-Fi implementa WLANs, redes locais sem fio de maior alcance que o Bluetooth."},
{topic:"wireless", q:"Uma diferença importante entre Bluetooth e Wi-Fi é que o Bluetooth:", opts:["Tem alcance maior que o Wi-Fi","Consome menos energia e tem alcance menor","Não usa radiofrequência","É sempre mais rápido que o Wi-Fi"], correct:1, exp:"O Bluetooth prioriza baixo consumo de energia para pequenas distâncias, enquanto o Wi-Fi cobre áreas maiores com mais velocidade."},

{topic:"ondas", q:"Uma onda transporta:", opts:["Matéria e energia","Apenas matéria","Apenas energia","Nem matéria nem energia"], correct:2, exp:"Ondas são perturbações que se propagam transportando apenas energia; a propagação ondulatória não transporta matéria."},
{topic:"ondas", q:"Ondas mecânicas, como o som, precisam de:", opts:["Vácuo para se propagar","Um meio material para se propagar","Luz para existir","Nenhum meio"], correct:1, exp:"Ondas mecânicas (som, ondas em corda, ondas na água) só se propagam através de um meio material."},
{topic:"ondas", q:"Ondas eletromagnéticas (luz, raio-x, micro-ondas) se propagam:", opts:["Só em meios sólidos","Sem precisar de meio material","Apenas na água","Apenas em meios metálicos"], correct:1, exp:"Ao contrário das mecânicas, as ondas eletromagnéticas não precisam de meio material e se propagam até no vácuo."},
{topic:"ondas", q:"O som é classificado como uma onda:", opts:["Transversal e eletromagnética","Longitudinal e mecânica","Mista e eletromagnética","Transversal e mecânica"], correct:1, exp:"O som é uma onda mecânica (precisa de meio) e longitudinal (a vibração ocorre na mesma direção da propagação)."},
{topic:"ondas", q:"Em uma onda transversal, a vibração ocorre:", opts:["Na mesma direção da propagação","Perpendicular à direção de propagação","Sempre em círculos","Não há vibração"], correct:1, exp:"Onda transversal: vibração perpendicular à propagação. Todas as ondas eletromagnéticas são transversais."},
{topic:"ondas", q:"A relação entre velocidade, comprimento de onda (λ) e frequência (f) é dada pela fórmula:", opts:["v = λ / f","v = λ × f","v = f / λ","v = λ + f"], correct:1, exp:"v = λ · f é a equação fundamental da velocidade de uma onda."},
{topic:"ondas", q:"Se uma onda tem frequência de 20 Hz e comprimento de onda de 18 cm, qual é a sua velocidade?", opts:["180 cm/s","360 cm/s","0,9 cm/s","38 cm/s"], correct:1, exp:"v = λ · f = 18 cm × 20 Hz = 360 cm/s, exatamente como no exemplo do material."},

{topic:"midia", q:"A resolução de uma imagem em bitmap é medida em:", opts:["Hertz","Pixels por polegada (ppi)","Bits por segundo","Decibéis"], correct:1, exp:"Quanto mais pixels por polegada (ppi), maior a resolução da imagem."},
{topic:"midia", q:"O tamanho do arquivo de uma imagem é proporcional principalmente a:", opts:["A cor de fundo","As dimensões em pixels da imagem","O nome do arquivo","A marca da câmera"], correct:1, exp:"O tamanho do arquivo é proporcional às dimensões em pixels; mais pixels significa mais detalhes, mas também mais espaço em disco."},
{topic:"midia", q:"Formatos de imagem como GIF, JPEG, PNG e TIFF podem gerar tamanhos de arquivo diferentes para a mesma imagem porque:", opts:["Usam métodos de compactação diferentes","Têm cores diferentes sempre","Só funcionam em certos sistemas operacionais","Não há diferença real entre eles"], correct:0, exp:"A variação nos métodos de compactação de cada formato faz o tamanho do arquivo variar bastante para as mesmas dimensões em pixels."},
{topic:"midia", q:"Na nomenclatura de resolução de vídeo (360p, 720p, 1080p), a letra \"p\" significa:", opts:["Pixel por segundo","Progressivo","Potência","Padrão"], correct:1, exp:"O \"p\" indica varredura progressiva (todas as linhas atualizadas de uma vez), em oposição ao \"i\" de entrelaçado."},
{topic:"midia", q:"A resolução 1080p, usada em Full HD, corresponde a:", opts:["480 linhas de resolução vertical","720 linhas de resolução vertical","1080 linhas de resolução vertical","4320 linhas de resolução vertical (4K)"], correct:2, exp:"1080p significa 1080 linhas de resolução vertical, com varredura progressiva — o padrão Full HD."},
{topic:"midia", q:"As categorias de compressão de vídeo mencionadas no material são:", opts:["Baixa, Média e Alta","SD, HD e Full HD","MP3, MP4 e AVI","2G, 3G e 4G"], correct:1, exp:"O material cita Standard Definition (SD), High Definition (HD) e Full HD como categorias de compressão de vídeo para celulares."},

{topic:"paridade", q:"Usando paridade ímpar (bit de paridade incluso no total), qual das sequências de 8 bits a seguir apresenta erro de transmissão: 11010101, 01101110 ou 10010011?", opts:["11010101","01101110","10010011","Nenhuma apresenta erro"], correct:2, exp:"Contando os bits 1 de cada sequência: 11010101 e 01101110 têm 5 uns (ímpar, OK); 10010011 tem 4 uns (par), o que viola a paridade ímpar esperada — logo apresenta erro."},
{topic:"paridade", q:"Completando a palavra de dados 1110001 com um bit de paridade par no final, qual o bit adicionado e a palavra final?", opts:["Bit 1, formando 11100011","Bit 0, formando 11100010","Bit 1, formando 11100010","Não é possível determinar sem mais informações"], correct:1, exp:"A palavra 1110001 já tem 4 bits 1 (quantidade par), então o bit de paridade par adicionado é 0, resultando em 11100010."},
{topic:"paridade", q:"Um receptor usando paridade ímpar recebe 11001010. O que a verificação de paridade indica?", opts:["Nenhum erro, a paridade está correta","Erro detectado, pois a quantidade de bits 1 é par","Erro detectado, mas o bit de paridade nunca pode estar errado","O bit de paridade está sempre correto"], correct:1, exp:"11001010 tem 4 bits 1 (par), o que contraria a paridade ímpar esperada — um erro é detectado."},
{topic:"paridade", q:"Ao detectar um erro usando apenas paridade simples (não bidimensional), por que geralmente não é possível corrigir o erro automaticamente?", opts:["Porque a paridade simples não indica qual bit está errado, apenas que há erro","Porque a paridade simples nunca detecta erros reais","Porque o bit de paridade sempre está corrompido","Porque a correção exige recalcular toda a mensagem"], correct:0, exp:"A paridade simples aponta apenas a existência de um erro (quantidade ímpar de bits trocados); ela não informa a posição do bit afetado, por isso não permite correção — apenas detecção."},
{topic:"paridade", q:"Qual é o principal objetivo da detecção de erros em transmissão de dados?", opts:["Aumentar a velocidade da transmissão","Garantir a integridade dos dados recebidos","Reduzir o tamanho dos pacotes","Facilitar a compressão"], correct:1, exp:"A detecção de erros existe para garantir que os dados recebidos correspondem aos dados enviados, preservando sua integridade."},
{topic:"paridade", q:"O que significa \"correção de erros\", em contraste com apenas detectá-los?", opts:["Identificar se houve erro","Recuperar os dados originais sem necessidade de retransmissão","Solicitar retransmissão automática","Reduzir a redundância dos dados"], correct:1, exp:"Correção de erros vai além da detecção: permite recuperar o dado original sem pedir uma nova transmissão, como faz o código de Hamming."},
{topic:"paridade", q:"Qual é a principal limitação do uso de bits de paridade simples?", opts:["Não detecta erros em uma quantidade par de bits alterados","Aumenta muito o tamanho da mensagem","Corrige automaticamente qualquer erro","É mais lenta de calcular que o CRC"], correct:0, exp:"Como o bit de paridade simples verifica apenas se a quantidade total de 1s é par ou ímpar, erros que trocam uma quantidade par de bits se cancelam e não são detectados."},
{topic:"paridade", q:"Em transmissões que usam apenas detecção de erro (sem correção), quando um erro é detectado, o sistema geralmente:", opts:["Ignora o erro e segue em frente","Solicita a retransmissão da mensagem","Substitui os dados por zeros","Usa compressão para corrigir o erro"], correct:1, exp:"Sem um mecanismo de correção, a solução padrão é solicitar o reenvio da mensagem (ARQ - Automatic Repeat reQuest)."},

{topic:"crc", q:"Dado o dado binário 1101011011 e o divisor polinomial (gerador) 10011, qual é o código CRC de 4 bits obtido para anexar à mensagem?", opts:["1110","0111","1011","0000"], correct:0, exp:"Anexando 4 zeros (11010110110000) e dividindo por 10011 usando XOR, o resto da divisão é 1110 — esse é o CRC anexado, formando a mensagem transmitida 11010110111110."},
{topic:"crc", q:"Ao receber a mensagem transmitida corretamente (dado + CRC) e dividi-la novamente pelo mesmo polinômio gerador, qual deve ser o resto da divisão para confirmar que não houve erro?", opts:["Igual ao CRC original","Zero","Igual à mensagem original","Sempre 1111"], correct:1, exp:"Se não houve erro na transmissão, a divisão da mensagem completa (dados+CRC) pelo gerador resulta em resto zero — essa é a verificação usada pelo receptor."},

{topic:"satelite", q:"O sinal original transmitido da estação terrena para o satélite é chamado de:", opts:["Downlink","Transponder","Uplink","Originador"], correct:2, exp:"Uplink é o termo usado para o enlace de subida — da estação terrena até o satélite."},
{topic:"satelite", q:"A combinação transmissor-receptor dentro do satélite, responsável por amplificar e retransmitir o sinal, é conhecida como:", opts:["Transceptor","Transponder","Repetidor simples","Unidade telefônica"], correct:1, exp:"O transponder é o conjunto transmissor-receptor do satélite que recebe o sinal de uplink e o retransmite no downlink."},
{topic:"satelite", q:"A maioria dos satélites de comunicação opera em qual espectro de frequência?", opts:["Espectro VHF","Espectro UHF","Espectro de micro-ondas","Espectro de infravermelho"], correct:2, exp:"Satélites de comunicação normalmente utilizam o espectro de micro-ondas, que permite feixes direcionais e grande capacidade de dados."},
{topic:"satelite", q:"Um sistema para efetivamente dobrar a largura de banda e a capacidade de transporte de informações de um satélite é conhecido como:", opts:["Modulação de frequência","Duplicação de frequência","Reutilização de frequência","Aumento de frequência"], correct:2, exp:"A reutilização de frequência (usando polarizações diferentes, por exemplo) permite dobrar a capacidade do satélite sem precisar de mais espectro."},
{topic:"satelite", q:"Satélites geoestacionários parecem estar parados em relação à Terra porque:", opts:["Possuem motores que corrigem continuamente sua posição","Orbitam na mesma velocidade angular da rotação terrestre","Estão localizados fora da atmosfera","Utilizam ondas gravitacionais para estabilização"], correct:1, exp:"Um satélite geoestacionário orbita com a mesma velocidade angular da rotação da Terra, por isso parece estacionário visto da superfície."},
{topic:"satelite", q:"Uma desvantagem comum dos sistemas de comunicação via satélite geoestacionário é:", opts:["Cobertura limitada","Alta latência na transmissão","Impossibilidade de transmissão digital","Baixa capacidade de alcance global"], correct:1, exp:"Por estarem a cerca de 36.000 km de altitude, satélites geoestacionários introduzem alta latência (atraso) na comunicação."},
{topic:"satelite", q:"Um dos principais desafios das comunicações via satélite em condições climáticas severas é:", opts:["A ausência de energia solar","O aumento da velocidade da luz","A atenuação do sinal devido à chuva","A eliminação das ondas eletromagnéticas"], correct:2, exp:"Chuva forte pode atenuar (enfraquecer) significativamente o sinal de satélite, principalmente em frequências mais altas como banda Ku e Ka."},
{topic:"satelite", q:"Em comunicações via satélite, o termo \"uplink\" refere-se a:", opts:["Transmissão do satélite para a estação terrestre","Comunicação entre dois satélites","Transmissão da estação terrestre para o satélite","Criptografia dos dados transmitidos"], correct:2, exp:"Uplink é o enlace de subida: da estação terrestre em direção ao satélite."},
{topic:"satelite", q:"Sistemas modernos de internet via satélite, como constelações de órbita baixa (LEO), apresentam como principal vantagem em relação a satélites geoestacionários:", opts:["Maior atraso de comunicação","Menor cobertura global","Redução da latência","Eliminação completa de interferências atmosféricas"], correct:2, exp:"Por orbitarem muito mais perto da Terra, satélites LEO reduzem significativamente a latência comparados aos geoestacionários."},
{topic:"satelite", q:"Em comunicações via satélite, a banda Ku é frequentemente utilizada para:", opts:["Comunicação submarina","Televisão por satélite e internet","Redes exclusivamente militares","Transmissão de energia elétrica"], correct:1, exp:"A banda Ku é amplamente usada em transmissões de TV por satélite e serviços de internet via satélite."},
{topic:"satelite", q:"Qual é a principal função de um satélite de comunicação?", opts:["Gerar energia elétrica para redes terrestres","Armazenar grandes volumes de dados","Receber, amplificar e retransmitir sinais de comunicação","Substituir completamente redes de fibra óptica"], correct:2, exp:"O satélite atua como um repetidor no espaço: recebe o sinal de uplink, amplifica e retransmite no downlink para uma ou mais estações terrenas."},

{topic:"fibra", q:"Em sistemas de fibra óptica, o componente responsável por converter sinais elétricos em sinais luminosos é:", opts:["Repetidor óptico","Fotodiodo","LED ou laser","Multiplexador"], correct:2, exp:"Um LED ou laser converte o sinal elétrico em pulsos de luz que serão transmitidos pela fibra."},
{topic:"fibra", q:"O fotodiodo, no receptor de um sistema de comunicação óptica, tem como principal função:", opts:["Amplificar sinais elétricos","Gerar ondas de rádio","Converter sinais luminosos em sinais elétricos","Reduzir a frequência da luz transmitida"], correct:2, exp:"O fotodiodo faz o processo inverso do LED/laser: recebe a luz e converte de volta em sinal elétrico."},
{topic:"fibra", q:"A atenuação em fibras ópticas corresponde a:", opts:["Aumento da potência do sinal ao longo da transmissão","Distorção causada apenas por ruído térmico","Perda gradual de potência do sinal óptico","Mudança de frequência da luz transmitida"], correct:2, exp:"Atenuação é a perda gradual de potência do sinal à medida que ele percorre o meio de transmissão."},
{topic:"fibra", q:"O fenômeno físico que permite a propagação da luz no interior da fibra óptica é denominado:", opts:["Difração total","Reflexão interna total","Interferência construtiva","Polarização linear"], correct:1, exp:"A luz permanece confinada ao núcleo da fibra graças à reflexão interna total na interface entre núcleo e revestimento."},
{topic:"fibra", q:"Em sistemas de comunicação óptica, o uso de fibras monomodo é indicado principalmente para:", opts:["Curtas distâncias e baixo custo","Longas distâncias e altas taxas de transmissão","Redes exclusivamente analógicas","Transmissão de sinais elétricos"], correct:1, exp:"Fibras monomodo têm núcleo mais fino e menor dispersão, sendo ideais para longas distâncias e altas taxas de transmissão."},
{topic:"fibra", q:"A principal vantagem da comunicação óptica em relação à transmissão elétrica tradicional é:", opts:["Maior consumo de energia","Menor largura de banda","Alta taxa de transmissão de dados","Maior suscetibilidade a interferências eletromagnéticas"], correct:2, exp:"A fibra óptica oferece altíssima largura de banda e taxa de transmissão, além de imunidade a interferência eletromagnética."},
{topic:"fibra", q:"O fenômeno responsável pela mudança de direção de uma onda de luz ao passar de um meio para outro (como do ar para o vidro) é chamado de:", opts:["Interferência","Difração","Refração","Polarização"], correct:2, exp:"Refração é a mudança de direção que a luz sofre ao mudar de meio, pois sua velocidade varia entre diferentes materiais."},
{topic:"fibra", q:"Sobre o uso prático dos cabos de fibra óptica em redes locais de curta distância, é correto afirmar que:", opts:["É sempre mais barato e simples de instalar que o par trançado","Apesar das vantagens técnicas, costuma ser menos utilizado que o cobre nessas distâncias, devido ao custo e à fragilidade","Substituiu completamente os cabos metálicos em qualquer cenário","Não pode ser usado em redes de longa distância"], correct:1, exp:"Apesar de tecnicamente superior, a fibra óptica tende a ser mais cara e frágil de instalar/manusear que o par trançado, o que limita seu uso em conexões curtas e de baixo custo."},
{topic:"fibra", q:"A maior parte da comunicação por ondas de luz em fibra óptica é realizada através de qual tipo de modulação?", opts:["Modulação de frequência","Modulação de intensidade (liga/desliga a fonte de luz)","Modulação de fase","Modulação de amplitude contínua"], correct:1, exp:"A comunicação óptica normalmente usa modulação de intensidade: a fonte de luz é ligada e desligada conforme o sinal binário serial."},
{topic:"fibra", q:"Sobre o cone de aceitação em fibra óptica, é correto afirmar que:", opts:["Qualquer ângulo de incidência resulta em transmissão pela fibra","Feixes de luz fora do cone de aceitação não sofrem reflexão interna total e não são transmitidos","O cone de aceitação não influencia a transmissão","Fibras multimodo não possuem cone de aceitação"], correct:1, exp:"Só os raios de luz que entram dentro do cone de aceitação sofrem reflexão interna total e conseguem se propagar pela fibra; os demais se perdem."},

{topic:"propagacao", q:"Um sinal precisa ser transmitido por 1000 km através de fibra óptica, com velocidade de propagação de 200.000 km/s. Qual é o tempo de propagação?", opts:["2 ms","5 ms","10 ms","50 ms"], correct:1, exp:"Tempo de propagação = distância / velocidade = 1000 km / 200.000 km/s = 0,005 s = 5 ms."},
{topic:"propagacao", q:"Um sinal percorre 500 km em um meio com velocidade de propagação de 250.000 km/s. Qual é o tempo de propagação?", opts:["0,5 ms","1 ms","2 ms","4 ms"], correct:2, exp:"Tempo de propagação = 500 km / 250.000 km/s = 0,002 s = 2 ms."},
{topic:"propagacao", q:"Um sinal precisa ser transmitido por 1200 km através de fibra óptica, a 200.000 km/s. Qual é o tempo de propagação?", opts:["3 ms","6 ms","12 ms","60 ms"], correct:1, exp:"Tempo de propagação = 1200 km / 200.000 km/s = 0,006 s = 6 ms."},
{topic:"propagacao", q:"Um pacote viaja 3000 km a 200.000 km/s entre A e B. O processamento no servidor B leva 2 ms e o enfileiramento nos dispositivos intermediários leva 1 ms em cada direção. Qual é o RTT total?", opts:["15 ms","30 ms","34 ms","40 ms"], correct:2, exp:"Tempo de propagação de ida = 3000/200.000 = 15 ms; o RTT considera ida e volta (2×15=30 ms) mais processamento (2 ms) mais enfileiramento nas duas direções (1+1=2 ms). Total = 30+2+2 = 34 ms."},
{topic:"propagacao", q:"O tempo de propagação de um sinal em um meio de transmissão depende principalmente de:", opts:["Do tamanho do pacote enviado","Da distância percorrida e da velocidade de propagação no meio","Da quantidade de dispositivos na rede","Da criptografia utilizada"], correct:1, exp:"Tempo de propagação = distância / velocidade de propagação; não depende do tamanho do pacote (isso afeta o tempo de transmissão, que é um conceito diferente)."},

{topic:"acesso_meio", q:"Sobre o funcionamento do CSMA/CD, qual afirmação é verdadeira?", opts:["Dispositivos podem ser configurados com maior prioridade de transmissão","Um dispositivo escuta o meio e espera até que ele não esteja ocupado antes de transmitir","Um dispositivo com token eletrônico é o único que pode transmitir após uma colisão","Todos os dados transmitidos são automaticamente criptografados"], correct:1, exp:"No CSMA/CD (Carrier Sense Multiple Access with Collision Detection), o dispositivo primeiro escuta o meio (carrier sense) e só transmite quando ele está livre."},
{topic:"acesso_meio", q:"Após detectar uma colisão no CSMA/CD, o que os dispositivos envolvidos costumam fazer?", opts:["Param de transmitir permanentemente","Tentam retransmitir imediatamente, sem espera","Tentam retransmitir após um tempo de espera aleatório","Enviam um pacote de erro para o administrador da rede"], correct:2, exp:"Após uma colisão, cada dispositivo aguarda um intervalo de tempo aleatório (algoritmo de backoff) antes de tentar retransmitir, reduzindo a chance de nova colisão."},
{topic:"acesso_meio", q:"O que acontece com os pacotes envolvidos em uma colisão em uma rede Ethernet compartilhada?", opts:["Os pacotes voltam automaticamente à origem intactos","Os pacotes são \"destruídos bit a bit\" pela colisão","Os pacotes continuam até o destino, porém corrompidos","Nada acontece, a colisão não afeta os pacotes"], correct:1, exp:"Quando dois sinais colidem no meio físico, eles se sobrepõem e se corrompem mutuamente — na prática, os pacotes envolvidos são descartados/destruídos."},
{topic:"acesso_meio", q:"Quantos domínios de colisão existem em uma rede que contém uma única ponte (bridge) dividindo dois segmentos?", opts:["Um","Dois","Três","Cinco"], correct:1, exp:"A bridge separa a rede em segmentos distintos: cada segmento se torna seu próprio domínio de colisão, totalizando dois."},
{topic:"acesso_meio", q:"O processo de separar domínios de colisão utilizando bridges, switches e roteadores é denominado:", opts:["Comutação de domínios","Extensão de domínios","Segmentação","Fragmentação"], correct:2, exp:"Esse processo de dividir a rede em domínios de colisão menores é chamado de segmentação."},
{topic:"acesso_meio", q:"Atenuação, em um sinal de rede, significa:", opts:["Deslocamento do sinal no tempo","Atraso na chegada do sinal","O sinal perdendo força ao percorrer o meio","Duplicação do sinal original"], correct:2, exp:"Atenuação é a perda de força (potência) do sinal à medida que ele se propaga pelo meio de transmissão."},
{topic:"acesso_meio", q:"O padrão IEEE 802.3 está relacionado a:", opts:["Camada física e de enlace de dados (Ethernet)","Camada de rede (IP)","Camada de transporte (TCP)","Camada de aplicação (HTTP)"], correct:0, exp:"O IEEE 802.3 define os padrões da tecnologia Ethernet, atuando nas camadas física e de enlace de dados."},
{topic:"acesso_meio", q:"Qual das opções descreve corretamente a relação entre as camadas física e de enlace de dados?", opts:["A camada física garante a entrega confiável de quadros","A camada de enlace organiza os bits em quadros e usa a camada física para transmiti-los","Ambas lidam exclusivamente com endereçamento lógico (IP)","Ambas são responsáveis pelo roteamento de pacotes"], correct:1, exp:"A camada de enlace agrupa os bits em quadros (frames) e depende da camada física para efetivamente transmitir esses bits pelo meio."},
{topic:"acesso_meio", q:"Roteadores tomam suas decisões de encaminhamento operando em qual camada e usando qual tipo de endereço?", opts:["Camada OSI 2, usando endereços MAC","Camada OSI 3, usando endereços IP","Camada OSI 3, usando endereços MAC","Camada OSI 2, usando endereços IP"], correct:1, exp:"Roteadores operam na camada de rede (camada 3) e usam endereços IP para decidir o caminho dos pacotes."},
{topic:"acesso_meio", q:"Qual é a unidade de dados (PDU) característica da camada física?", opts:["Quadro (Frame)","Pacote","Bit","Segmento"], correct:2, exp:"Na camada física, a unidade de dados é o bit — o fluxo bruto transmitido pelo meio físico."},
{topic:"acesso_meio", q:"Qual é a unidade de dados (PDU) característica da camada de enlace de dados?", opts:["Quadro (Frame)","Pacote","Bit","Segmento"], correct:0, exp:"Na camada de enlace, os bits são organizados em quadros (frames), que incluem endereçamento MAC e verificação de erros."},
{topic:"acesso_meio", q:"Sobre os protocolos ARP e RARP, é correto afirmar que:", opts:["Não usam endereços físicos unicast e broadcast, o que evita conflitos","Usam endereços físicos, incluindo broadcast, para resolver endereços entre estações","São usados exclusivamente em redes IPv6","Eliminam completamente a possibilidade de colisões na rede"], correct:1, exp:"ARP e RARP dependem de mensagens broadcast/unicast em endereços físicos (MAC) para resolver o mapeamento entre endereços IP e MAC."},
];

/* ---------- ESTADO ---------- */
let practiceState = { topic:null, idx:0, order:[] };
let examState = { order:[], idx:0, answers:{} };
let customState = { order:[], idx:0, answers:{} };
let customSelectedTopics = new Set();

function loadStats(){
  try{ return JSON.parse(localStorage.getItem('simulado_stats')||'{}'); }catch(e){ return {}; }
}
function saveStats(s){ localStorage.setItem('simulado_stats', JSON.stringify(s)); }

/* ---------- NAVEGAÇÃO ---------- */
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
    document.getElementById('view-'+btn.dataset.view).classList.add('active');
  });
});

/* ---------- HOME ---------- */
function renderHome(){
  const stats = loadStats();
  const box = document.getElementById('home-stats');
  const attempts = stats.attempts || 0;
  const lastScore = stats.lastScore != null ? stats.lastScore+'%' : '—';
  const bestScore = stats.bestScore != null ? stats.bestScore+'%' : '—';
  const weakest = stats.weakestTopic ? (TOPICS[stats.weakestTopic]? TOPICS[stats.weakestTopic].label : stats.weakestTopic) : '—';
  box.innerHTML = `
    <div class="stat"><div class="num">${attempts}</div><div class="lbl">simulados feitos</div></div>
    <div class="stat"><div class="num">${lastScore}</div><div class="lbl">última nota</div></div>
    <div class="stat strong"><div class="num">${bestScore}</div><div class="lbl">melhor nota</div></div>
    <div class="stat weak"><div class="num" style="font-size:14px; line-height:1.3">${weakest}</div><div class="lbl">tema mais fraco</div></div>
  `;
  document.getElementById('last-score-stamp').textContent = attempts
    ? `último simulado: ${lastScore} · ${attempts} tentativa(s)`
    : 'Nenhum simulado feito ainda';

  const topicsBox = document.getElementById('home-topics');
  topicsBox.innerHTML = Object.keys(TOPICS).map(key=>{
    const n = QUESTIONS.filter(q=>q.topic===key).length;
    return `<div class="card" data-jump="${key}">
      <h3>${TOPICS[key].label}</h3>
      <p>${n} questão(ões) de prática ${TOPICS[key].videos.length? '· videoaula disponível':''}</p>
      <span class="badge">praticar &rarr;</span>
    </div>`;
  }).join('');
  topicsBox.querySelectorAll('.card').forEach(c=>{
    c.addEventListener('click', ()=>{
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      document.querySelector('[data-view="practice"]').classList.add('active');
      document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
      document.getElementById('view-practice').classList.add('active');
      startPractice(c.dataset.jump);
    });
  });
}

/* ---------- VIDEOAULAS ---------- */
function renderVideos(){
  const box = document.getElementById('videos-container');
  box.innerHTML = Object.keys(TOPICS).filter(k=>TOPICS[k].videos.length).map(key=>{
    const t = TOPICS[key];
    const frames = t.videos.map((v,i)=>`
      <span class="topic-tag">opção ${i+1}</span>
      <div class="video-frame">
        <iframe src="https://www.youtube.com/embed/${v}" title="${t.label} - opção ${i+1}" allowfullscreen loading="lazy"></iframe>
      </div>`).join('');
    return `<div class="video-block">
      <h3>${t.label}</h3>
      <span class="topic-tag">tema: ${key}</span>
      ${frames}
    </div>`;
  }).join('') + `<div class="video-block"><p style="color:var(--text-faint); font-size:13px; margin:0">Alguns temas não têm vídeo indicado aqui &mdash; use a aba "Praticar por tema" para essas questões, e se quiser buscar um vídeo específico é só pesquisar o nome do tema no YouTube.</p></div>`;
}

/* ---------- PRATICAR POR TEMA ---------- */
function renderPracticePicker(){
  const box = document.getElementById('practice-topic-picker');
  box.innerHTML = Object.keys(TOPICS).map(key=>{
    const n = QUESTIONS.filter(q=>q.topic===key).length;
    return `<div class="card" data-topic="${key}">
      <h3>${TOPICS[key].label}</h3>
      <p>${n} questão(ões) com feedback imediato</p>
      <span class="badge">começar &rarr;</span>
    </div>`;
  }).join('');
  box.querySelectorAll('.card').forEach(c=>{
    c.addEventListener('click', ()=>startPractice(c.dataset.topic));
  });
}
function startPractice(topic){
  const qs = QUESTIONS.map((q,i)=>({...q, gid:i})).filter(q=>q.topic===topic);
  practiceState = { topic, idx:0, order: qs };
  document.getElementById('practice-topic-picker').style.display='none';
  document.getElementById('practice-quiz-area').style.display='block';
  renderPracticeQuestion();
}
document.getElementById('practice-back').addEventListener('click', ()=>{
  document.getElementById('practice-topic-picker').style.display='grid';
  document.getElementById('practice-quiz-area').style.display='none';
});
function renderPracticeQuestion(){
  const q = practiceState.order[practiceState.idx];
  const holder = document.getElementById('practice-question-holder');
  document.getElementById('practice-progress').style.width = Math.round(((practiceState.idx)/practiceState.order.length)*100)+'%';
  holder.innerHTML = `
    <div class="quiz-card">
      <span class="qtag">${TOPICS[q.topic].label} · questão ${practiceState.idx+1} de ${practiceState.order.length}</span>
      <div class="qtext">${q.q}</div>
      <div id="opts-holder"></div>
      <div class="explain" id="practice-explain">${q.exp}</div>
    </div>
  `;
  const optsHolder = holder.querySelector('#opts-holder');
  q.opts.forEach((opt,i)=>{
    const b = document.createElement('button');
    b.className='opt'; b.textContent = opt;
    b.addEventListener('click', ()=>{
      optsHolder.querySelectorAll('.opt').forEach(o=>o.disabled=true);
      if(i===q.correct){ b.classList.add('correct'); }
      else{
        b.classList.add('incorrect');
        optsHolder.children[q.correct].classList.add('correct');
      }
      document.getElementById('practice-explain').classList.add('show');
      setTimeout(()=>{
        const nextBtn = document.createElement('button');
        nextBtn.className='primary'; nextBtn.style.marginTop='14px';
        nextBtn.textContent = practiceState.idx < practiceState.order.length-1 ? 'Próxima pergunta →' : 'Concluir tema';
        nextBtn.addEventListener('click', ()=>{
          if(practiceState.idx < practiceState.order.length-1){
            practiceState.idx++;
            renderPracticeQuestion();
          } else {
            document.getElementById('practice-progress').style.width='100%';
            holder.innerHTML = `<div class="quiz-card" style="text-align:center">
              <h3 style="margin-top:0">Tema concluído 🎯</h3>
              <p style="color:var(--text-dim)">Você praticou todas as questões de "${TOPICS[q.topic].label}".</p>
              <button class="primary" onclick="document.getElementById('practice-back').click()">Escolher outro tema</button>
            </div>`;
          }
        });
        holder.querySelector('.quiz-card').appendChild(nextBtn);
      }, 150);
    });
    optsHolder.appendChild(b);
  });
}

/* ---------- SIMULADO (motor compartilhado: completo e selecionado) ---------- */
const EXAM_TOTAL_QUESTIONS = 30;   // simulado completo: todos os 15 temas, 2 de cada
const CUSTOM_TOTAL_QUESTIONS = 10; // simulado selecionado: 10 fixas, distribuídas entre os temas escolhidos
function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
// Distribui `total` questões entre os temas em `topicKeys` o mais igualmente possível,
// entregando uma questão por vez a cada tema em rodadas (round-robin) até bater o total
// ou os temas selecionados esgotarem suas questões disponíveis.
function dealQuestions(topicKeys, total){
  const pools = {};
  topicKeys.forEach(t=>{ pools[t] = shuffle(QUESTIONS.map((q,i)=>({...q,gid:i})).filter(q=>q.topic===t)); });
  const dealOrder = shuffle([...topicKeys]);
  const taken = {}; topicKeys.forEach(t=>taken[t]=0);
  const picked = [];
  while(picked.length < total){
    let addedThisRound = false;
    for(const t of dealOrder){
      if(picked.length >= total) break;
      if(taken[t] < pools[t].length){
        picked.push(pools[t][taken[t]]);
        taken[t]++;
        addedThisRound = true;
      }
    }
    if(!addedThisRound) break;
  }
  return shuffle(picked);
}
function renderQuizQuestion(state, prefix){
  const q = state.order[state.idx];
  const holder = document.getElementById(`${prefix}-question-holder`);
  document.getElementById(`${prefix}-progress`).style.width = Math.round(((state.idx+1)/state.order.length)*100)+'%';
  const selected = state.answers[state.idx];
  holder.innerHTML = `
    <div class="quiz-card">
      <span class="qtag">questão ${state.idx+1} de ${state.order.length}</span>
      <div class="qtext">${q.q}</div>
      <div id="${prefix}-opts-holder"></div>
    </div>
  `;
  const optsHolder = holder.querySelector(`#${prefix}-opts-holder`);
  q.opts.forEach((opt,i)=>{
    const b = document.createElement('button');
    b.className='opt' + (selected===i? ' selected':'');
    b.textContent = opt;
    b.addEventListener('click', ()=>{
      state.answers[state.idx] = i;
      optsHolder.querySelectorAll('.opt').forEach(o=>o.classList.remove('selected'));
      b.classList.add('selected');
    });
    optsHolder.appendChild(b);
  });
  document.getElementById(`${prefix}-prev`).disabled = state.idx===0;
  document.getElementById(`${prefix}-next`).textContent = state.idx===state.order.length-1 ? 'Finalizar simulado' : 'Próxima →';
}
function initQuizNav(state, prefix, onFinish){
  document.getElementById(`${prefix}-prev`).addEventListener('click', ()=>{
    if(state.idx>0){ state.idx--; renderQuizQuestion(state, prefix); }
  });
  document.getElementById(`${prefix}-next`).addEventListener('click', ()=>{
    if(state.idx < state.order.length-1){
      state.idx++;
      renderQuizQuestion(state, prefix);
    } else {
      onFinish();
    }
  });
}
function finishQuiz(state, prefix, onRetry){
  document.getElementById(`${prefix}-quiz-area`).style.display='none';
  const total = state.order.length;
  let correctCount = 0;
  const byTopic = {};
  const reviewList = [];
  state.order.forEach((q,i)=>{
    if(!byTopic[q.topic]) byTopic[q.topic] = {c:0,t:0};
    byTopic[q.topic].t++;
    const ans = state.answers[i];
    const isCorrect = ans===q.correct;
    if(isCorrect){ correctCount++; byTopic[q.topic].c++; }
    reviewList.push({q, ans, isCorrect});
  });
  const pct = Math.round((correctCount/total)*100);
  const grade = (pct/10).toFixed(1);

  let weakestTopic = null, weakestPct = 101;
  Object.keys(byTopic).forEach(t=>{
    const p = Math.round((byTopic[t].c/byTopic[t].t)*100);
    if(p < weakestPct){ weakestPct = p; weakestTopic = t; }
  });

  // Qualquer tema com menos de 60% de acerto é considerado "com dificuldade"
  const weakTopics = Object.keys(byTopic)
    .filter(t => (byTopic[t].c/byTopic[t].t) < 0.6)
    .sort((a,b)=> (byTopic[a].c/byTopic[a].t) - (byTopic[b].c/byTopic[b].t));

  const stats = loadStats();
  stats.attempts = (stats.attempts||0)+1;
  stats.lastScore = pct;
  stats.bestScore = Math.max(stats.bestScore||0, pct);
  stats.weakestTopic = weakestTopic;
  saveStats(stats);

  const resultBox = document.getElementById(`${prefix}-result`);
  resultBox.style.display='block';

  const breakdownHTML = Object.keys(byTopic).sort((a,b)=> (byTopic[a].c/byTopic[a].t)-(byTopic[b].c/byTopic[b].t)).map(t=>{
    const p = Math.round((byTopic[t].c/byTopic[t].t)*100);
    const color = p>=70? 'var(--green)' : p>=40? 'var(--amber)' : 'var(--red)';
    return `<div class="breakdown-row">
      <div class="name">${TOPICS[t].label}</div>
      <div class="bar"><div class="fill" style="width:${p}%; background:${color}"></div></div>
      <div class="pct">${byTopic[t].c}/${byTopic[t].t}</div>
    </div>`;
  }).join('');

  const weakVideosHTML = weakTopics.map(t=>{
    const label = TOPICS[t].label;
    const acertos = byTopic[t].c;
    const totalT = byTopic[t].t;
    if(TOPICS[t].videos.length){
      const frames = TOPICS[t].videos.map((v,i)=>`
        <span class="topic-tag">opção ${i+1}</span>
        <div class="video-frame">
          <iframe src="https://www.youtube.com/embed/${v}" title="${label} - opção ${i+1}" allowfullscreen loading="lazy"></iframe>
        </div>`).join('');
      return `<div class="video-block">
        <h3>Reforço: ${label}</h3>
        <span class="topic-tag">você acertou ${acertos} de ${totalT} nesse tema</span>
        ${frames}
      </div>`;
    } else {
      return `<div class="video-block">
        <h3>Reforço: ${label}</h3>
        <span class="topic-tag">você acertou ${acertos} de ${totalT} nesse tema</span>
        <p style="color:var(--text-faint); font-size:13px; margin:0">Não há videoaula cadastrada para esse tema &mdash; use a aba "Praticar por tema" para revisar as questões com explicação.</p>
      </div>`;
    }
  }).join('');

  const reviewHTML = reviewList.map(r=>{
    return `<div class="review-item ${r.isCorrect?'right':'wrong'}">
      <div class="qtext">${r.q.q}</div>
      <div class="ans">Sua resposta: <b>${r.ans!=null? r.q.opts[r.ans] : '(em branco)'}</b></div>
      ${!r.isCorrect? `<div class="ans">Resposta correta: <b style="color:var(--green)">${r.q.opts[r.q.correct]}</b></div>`:''}
      <div class="ans" style="margin-top:6px; color:var(--text-faint)">${r.q.exp}</div>
    </div>`;
  }).join('');

  resultBox.innerHTML = `
    <div class="result-header">
      <div class="msg">Você acertou ${correctCount} de ${total} questões</div>
      <div class="score ${pct>=60?'pass':'fail'}">${grade}</div>
      <div class="msg">${pct>=60 ? 'Nota suficiente para passar dos 6 pontos exigidos 🎉' : 'Ainda abaixo dos 6 pontos &mdash; foque nos temas com dificuldade abaixo'}</div>
    </div>

    ${weakTopics.length ? `<div class="weak-alert">Temas com dificuldade (menos de 60% de acerto): <strong>${weakTopics.map(t=>TOPICS[t].label).join(', ')}</strong>. As videoaulas desses temas já estão logo abaixo.</div>` : `<div class="weak-alert" style="background:var(--green-dim); border-color:#1f5f3d"><strong style="color:var(--green)">Nenhum tema com dificuldade grave desta vez</strong> &mdash; todos os temas tiveram 60% de acerto ou mais.</div>`}

    ${weakTopics.length ? `<h3 style="margin-bottom:10px">Videoaulas para reforçar</h3>${weakVideosHTML}` : ''}

    <h3 style="margin-bottom:10px">Desempenho por tema</h3>
    <div class="hero" style="padding:16px 20px">${breakdownHTML}</div>

    <h3 style="margin:22px 0 10px">Revisão questão por questão</h3>
    ${reviewHTML}

    <div class="center-actions">
      <button class="primary" id="retry-${prefix}">Refazer simulado</button>
      <button class="ghost" id="go-practice-weak-${prefix}">Praticar tema mais fraco</button>
    </div>
  `;
  document.getElementById(`retry-${prefix}`).addEventListener('click', ()=>{
    resultBox.style.display='none';
    onRetry();
    renderHome();
  });
  if(weakestTopic){
    document.getElementById(`go-practice-weak-${prefix}`).addEventListener('click', ()=>{
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      document.querySelector('[data-view="practice"]').classList.add('active');
      document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
      document.getElementById('view-practice').classList.add('active');
      startPractice(weakTopics.length ? weakTopics[0] : weakestTopic);
    });
  }
  renderHome();
}

/* ---------- SIMULADO COMPLETO ---------- */
document.getElementById('start-exam').addEventListener('click', ()=>{
  Object.assign(examState, { order: dealQuestions(Object.keys(TOPICS), EXAM_TOTAL_QUESTIONS), idx:0, answers:{} });
  document.getElementById('exam-intro').style.display='none';
  document.getElementById('exam-quiz-area').style.display='block';
  document.getElementById('exam-result').style.display='none';
  renderQuizQuestion(examState, 'exam');
});
initQuizNav(examState, 'exam', ()=> finishQuiz(examState, 'exam', ()=>{
  document.getElementById('exam-intro').style.display='block';
}));

/* ---------- SIMULADO SELECIONADO ---------- */
function renderCustomPicker(){
  const box = document.getElementById('custom-topic-picker');
  box.innerHTML = Object.keys(TOPICS).map(key=>{
    const n = QUESTIONS.filter(q=>q.topic===key).length;
    const sel = customSelectedTopics.has(key);
    return `<div class="card${sel?' selected':''}" data-topic="${key}">
      <h3>${TOPICS[key].label}</h3>
      <p>${n} questão(ões) disponível(is)</p>
      <span class="badge">${sel? 'selecionado ✓':'selecionar'}</span>
    </div>`;
  }).join('');
  box.querySelectorAll('.card').forEach(c=>{
    c.addEventListener('click', ()=>{
      const t = c.dataset.topic;
      if(customSelectedTopics.has(t)) customSelectedTopics.delete(t);
      else customSelectedTopics.add(t);
      renderCustomPicker();
      updateStartCustomButton();
    });
  });
}
function updateStartCustomButton(){
  const btn = document.getElementById('start-custom');
  const topics = [...customSelectedTopics];
  const available = topics.reduce((sum,t)=> sum + QUESTIONS.filter(q=>q.topic===t).length, 0);
  const willHave = Math.min(CUSTOM_TOTAL_QUESTIONS, available);
  btn.disabled = topics.length === 0;
  btn.textContent = topics.length
    ? `Começar simulado selecionado (${willHave} questões)`
    : 'Selecione ao menos um tema';
}
document.getElementById('start-custom').addEventListener('click', ()=>{
  Object.assign(customState, { order: dealQuestions([...customSelectedTopics], CUSTOM_TOTAL_QUESTIONS), idx:0, answers:{} });
  document.getElementById('custom-picker-area').style.display='none';
  document.getElementById('custom-quiz-area').style.display='block';
  document.getElementById('custom-result').style.display='none';
  renderQuizQuestion(customState, 'custom');
});
initQuizNav(customState, 'custom', ()=> finishQuiz(customState, 'custom', ()=>{
  document.getElementById('custom-picker-area').style.display='block';
}));

/* ---------- INIT ---------- */
renderHome();
renderVideos();
renderPracticePicker();
renderCustomPicker();
updateStartCustomButton();
