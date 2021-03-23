window.BENCHMARK_DATA = {
  "lastUpdate": 1616526572204,
  "repoUrl": "https://github.com/tensorflow/io",
  "entries": {
    "Tensorflow-IO Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e16038f8ce6bf76c927176d4d1fc8f4a73c2771",
          "message": "handle missing dependencies while benchmarking (#1271)\n\n* handle missing dependencies while benchmarking\r\n\r\n* setup test_sql\r\n\r\n* job name change\r\n\r\n* set auto-push to true\r\n\r\n* remove auto-push\r\n\r\n* add personal access token\r\n\r\n* use alternate method to push to gh-pages\r\n\r\n* add name to the action\r\n\r\n* use different id\r\n\r\n* modify creds\r\n\r\n* use github_token\r\n\r\n* change repo name\r\n\r\n* set auto-push\r\n\r\n* set origin and push results\r\n\r\n* set env\r\n\r\n* use PERSONAL_GITHUB_TOKEN\r\n\r\n* use push changes action\r\n\r\n* use github.head_ref to push the changes\r\n\r\n* try using fetch-depth\r\n\r\n* modify branch name\r\n\r\n* use alternative push approach\r\n\r\n* git switch -\r\n\r\n* test by merging with forked master",
          "timestamp": "2021-01-18T12:47:47-08:00",
          "tree_id": "08e90708e7a2b56ce5ee09ae6475345ecca503a5",
          "url": "https://github.com/tensorflow/io/commit/3e16038f8ce6bf76c927176d4d1fc8f4a73c2771"
        },
        "date": 1611003276387,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 4.304679994883793,
            "unit": "iter/sec",
            "range": "stddev: 0.04178211856572626",
            "extra": "mean: 232.30530520004322 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 33.73616537924919,
            "unit": "iter/sec",
            "range": "stddev: 0.0009380559352526182",
            "extra": "mean: 29.641780230751742 msec\nrounds: 13"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.4558491864445848,
            "unit": "iter/sec",
            "range": "stddev: 0.053385406140713715",
            "extra": "mean: 686.8843347999245 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.4595872604308204,
            "unit": "iter/sec",
            "range": "stddev: 0.05253451834136777",
            "extra": "mean: 685.1251906000016 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.4411195097800904,
            "unit": "iter/sec",
            "range": "stddev: 0.05314464370214676",
            "extra": "mean: 693.9049768000132 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.6008237154949962,
            "unit": "iter/sec",
            "range": "stddev: 0.04875915525437668",
            "extra": "mean: 1.6643817050000052 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.46461061589205505,
            "unit": "iter/sec",
            "range": "stddev: 0.05371091401431979",
            "extra": "mean: 2.1523399719999814 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.8020236367824926,
            "unit": "iter/sec",
            "range": "stddev: 0.00749891863595247",
            "extra": "mean: 1.246846045600023 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.8716799631934227,
            "unit": "iter/sec",
            "range": "stddev: 0.05850214480012198",
            "extra": "mean: 258.2858111999485 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.2969044619485253,
            "unit": "iter/sec",
            "range": "stddev: 0.06442334909934348",
            "extra": "mean: 435.36856519999674 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.2498744825397408,
            "unit": "iter/sec",
            "range": "stddev: 0.0626726246238478",
            "extra": "mean: 444.46923940004126 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.239904457072719,
            "unit": "iter/sec",
            "range": "stddev: 0.06240588378338161",
            "extra": "mean: 446.44761379995543 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 29.131760845155497,
            "unit": "iter/sec",
            "range": "stddev: 0.0012068292108734942",
            "extra": "mean: 34.32679560000906 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5969.604003544291,
            "unit": "iter/sec",
            "range": "stddev: 0.000008094597187428939",
            "extra": "mean: 167.5152990728157 usec\nrounds: 2588"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4326.561367343299,
            "unit": "iter/sec",
            "range": "stddev: 0.000006529570915804745",
            "extra": "mean: 231.13043248339375 usec\nrounds: 2666"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1046.4884644569722,
            "unit": "iter/sec",
            "range": "stddev: 0.00000950120872042345",
            "extra": "mean: 955.5767062553382 usec\nrounds: 960"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 558.4202864408825,
            "unit": "iter/sec",
            "range": "stddev: 0.000012580490141841481",
            "extra": "mean: 1.7907658877752208 msec\nrounds: 499"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1751.803047545617,
            "unit": "iter/sec",
            "range": "stddev: 0.000009214456558069606",
            "extra": "mean: 570.8404271821887 usec\nrounds: 1442"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 756.8018826019883,
            "unit": "iter/sec",
            "range": "stddev: 0.00001520540824503138",
            "extra": "mean: 1.3213497785733082 msec\nrounds: 420"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1259.2594325442471,
            "unit": "iter/sec",
            "range": "stddev: 0.000012764260008010975",
            "extra": "mean: 794.1175377813678 usec\nrounds: 794"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e16038f8ce6bf76c927176d4d1fc8f4a73c2771",
          "message": "handle missing dependencies while benchmarking (#1271)\n\n* handle missing dependencies while benchmarking\r\n\r\n* setup test_sql\r\n\r\n* job name change\r\n\r\n* set auto-push to true\r\n\r\n* remove auto-push\r\n\r\n* add personal access token\r\n\r\n* use alternate method to push to gh-pages\r\n\r\n* add name to the action\r\n\r\n* use different id\r\n\r\n* modify creds\r\n\r\n* use github_token\r\n\r\n* change repo name\r\n\r\n* set auto-push\r\n\r\n* set origin and push results\r\n\r\n* set env\r\n\r\n* use PERSONAL_GITHUB_TOKEN\r\n\r\n* use push changes action\r\n\r\n* use github.head_ref to push the changes\r\n\r\n* try using fetch-depth\r\n\r\n* modify branch name\r\n\r\n* use alternative push approach\r\n\r\n* git switch -\r\n\r\n* test by merging with forked master",
          "timestamp": "2021-01-18T12:47:47-08:00",
          "tree_id": "08e90708e7a2b56ce5ee09ae6475345ecca503a5",
          "url": "https://github.com/tensorflow/io/commit/3e16038f8ce6bf76c927176d4d1fc8f4a73c2771"
        },
        "date": 1611003391692,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 4.291225781624101,
            "unit": "iter/sec",
            "range": "stddev: 0.03515597144107129",
            "extra": "mean: 233.03364839999858 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 33.201100246668744,
            "unit": "iter/sec",
            "range": "stddev: 0.0010848756378380958",
            "extra": "mean: 30.119483769226463 msec\nrounds: 13"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.4975548970432138,
            "unit": "iter/sec",
            "range": "stddev: 0.04762134807869421",
            "extra": "mean: 667.7551533999917 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.495963298917228,
            "unit": "iter/sec",
            "range": "stddev: 0.047597073848552184",
            "extra": "mean: 668.4655972000087 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.4833546076199464,
            "unit": "iter/sec",
            "range": "stddev: 0.04943309097102761",
            "extra": "mean: 674.1476346000013 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.6075462648640505,
            "unit": "iter/sec",
            "range": "stddev: 0.05105520937978464",
            "extra": "mean: 1.6459651846000043 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.46813303994726785,
            "unit": "iter/sec",
            "range": "stddev: 0.04703333564479941",
            "extra": "mean: 2.136144887599994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.8222328245819328,
            "unit": "iter/sec",
            "range": "stddev: 0.006226010202048463",
            "extra": "mean: 1.2162005336000221 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 4.039193963172943,
            "unit": "iter/sec",
            "range": "stddev: 0.049113333161569274",
            "extra": "mean: 247.57414699997753 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.34913833053974,
            "unit": "iter/sec",
            "range": "stddev: 0.058516690652003725",
            "extra": "mean: 425.6880010000259 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.3157606969205253,
            "unit": "iter/sec",
            "range": "stddev: 0.05930214942026509",
            "extra": "mean: 431.8235477999906 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.2887013040512443,
            "unit": "iter/sec",
            "range": "stddev: 0.05658930704243954",
            "extra": "mean: 436.9290122000166 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 28.864014343176034,
            "unit": "iter/sec",
            "range": "stddev: 0.0008764749606082044",
            "extra": "mean: 34.64521559997138 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 6138.950916134795,
            "unit": "iter/sec",
            "range": "stddev: 0.000006574361987692262",
            "extra": "mean: 162.8942817203073 usec\nrounds: 2396"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4382.747111592647,
            "unit": "iter/sec",
            "range": "stddev: 0.000006740440391520411",
            "extra": "mean: 228.16739696318228 usec\nrounds: 2766"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1052.3148505638233,
            "unit": "iter/sec",
            "range": "stddev: 0.000010911277661695742",
            "extra": "mean: 950.2859334012123 usec\nrounds: 961"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 555.86983447307,
            "unit": "iter/sec",
            "range": "stddev: 0.00004171074297066913",
            "extra": "mean: 1.7989823120154338 msec\nrounds: 516"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1741.8977027282392,
            "unit": "iter/sec",
            "range": "stddev: 0.000009456391143903642",
            "extra": "mean: 574.0865255369214 usec\nrounds: 1351"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 761.9024603759048,
            "unit": "iter/sec",
            "range": "stddev: 0.000029726492385136535",
            "extra": "mean: 1.312503964755047 msec\nrounds: 454"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1269.6042714628938,
            "unit": "iter/sec",
            "range": "stddev: 0.000012961471499867283",
            "extra": "mean: 787.6470034617606 usec\nrounds: 867"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c652bee06fbe3d86120a49d7f823491a85234db",
          "message": "Disable s3 macOS for now as docker is not working on GitHub Actions for macOS (#1277)\n\n* Revert \"[s3] add support for testing on macOS (#1253)\"\r\n\r\nThis reverts commit 81789bde99e62523ca4d9f460bb345c666902acd.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Update\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-01-19T08:23:38-08:00",
          "tree_id": "1f4ebd0d670b0eac026c20b6f881707acc9b0a05",
          "url": "https://github.com/tensorflow/io/commit/5c652bee06fbe3d86120a49d7f823491a85234db"
        },
        "date": 1611073760051,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 4.255031939712024,
            "unit": "iter/sec",
            "range": "stddev: 0.03778937947304685",
            "extra": "mean: 235.01586220000945 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 33.26321762631914,
            "unit": "iter/sec",
            "range": "stddev: 0.001074748280751596",
            "extra": "mean: 30.063237153845314 msec\nrounds: 13"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.4555661093575591,
            "unit": "iter/sec",
            "range": "stddev: 0.05220422840404052",
            "extra": "mean: 687.0179194000116 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.4615482314937203,
            "unit": "iter/sec",
            "range": "stddev: 0.050070668232670486",
            "extra": "mean: 684.2059525999957 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.4390824232713808,
            "unit": "iter/sec",
            "range": "stddev: 0.053527942579283797",
            "extra": "mean: 694.8872307999977 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.6003612693389956,
            "unit": "iter/sec",
            "range": "stddev: 0.05266461458382216",
            "extra": "mean: 1.665663744599999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.45875239951004637,
            "unit": "iter/sec",
            "range": "stddev: 0.05849560239517374",
            "extra": "mean: 2.179825110599995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.8209834399484565,
            "unit": "iter/sec",
            "range": "stddev: 0.004202830139726732",
            "extra": "mean: 1.2180513653999925 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.9545466214601803,
            "unit": "iter/sec",
            "range": "stddev: 0.05306372182504714",
            "extra": "mean: 252.8734886000052 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.3282919527720067,
            "unit": "iter/sec",
            "range": "stddev: 0.059911782016372046",
            "extra": "mean: 429.499401399994 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.3020966240948404,
            "unit": "iter/sec",
            "range": "stddev: 0.058715683901597766",
            "extra": "mean: 434.3866324000146 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.2649925640338466,
            "unit": "iter/sec",
            "range": "stddev: 0.05716465644477851",
            "extra": "mean: 441.5025532000186 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 28.476967541028813,
            "unit": "iter/sec",
            "range": "stddev: 0.000539056948969044",
            "extra": "mean: 35.11609860000817 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 6142.647416381999,
            "unit": "iter/sec",
            "range": "stddev: 0.000007238232886319312",
            "extra": "mean: 162.79625578591276 usec\nrounds: 2506"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4395.542595104788,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072645599462775355",
            "extra": "mean: 227.50319860707896 usec\nrounds: 2729"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1050.4273470123194,
            "unit": "iter/sec",
            "range": "stddev: 0.000008939661784085216",
            "extra": "mean: 951.9934937378131 usec\nrounds: 958"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 558.4193874344173,
            "unit": "iter/sec",
            "range": "stddev: 0.000012777537388486969",
            "extra": "mean: 1.7907687707519708 msec\nrounds: 506"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1753.3126790115502,
            "unit": "iter/sec",
            "range": "stddev: 0.000008097427557599297",
            "extra": "mean: 570.3489240514482 usec\nrounds: 1422"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 767.3392568328779,
            "unit": "iter/sec",
            "range": "stddev: 0.000014793018542079358",
            "extra": "mean: 1.3032045357973838 msec\nrounds: 433"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1278.404196713598,
            "unit": "iter/sec",
            "range": "stddev: 0.000012358788586115806",
            "extra": "mean: 782.2252168529378 usec\nrounds: 807"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c652bee06fbe3d86120a49d7f823491a85234db",
          "message": "Disable s3 macOS for now as docker is not working on GitHub Actions for macOS (#1277)\n\n* Revert \"[s3] add support for testing on macOS (#1253)\"\r\n\r\nThis reverts commit 81789bde99e62523ca4d9f460bb345c666902acd.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Update\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-01-19T08:23:38-08:00",
          "tree_id": "1f4ebd0d670b0eac026c20b6f881707acc9b0a05",
          "url": "https://github.com/tensorflow/io/commit/5c652bee06fbe3d86120a49d7f823491a85234db"
        },
        "date": 1611073914804,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 4.252359926235029,
            "unit": "iter/sec",
            "range": "stddev: 0.03899494419884176",
            "extra": "mean: 235.1635367999961 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 31.910087923834816,
            "unit": "iter/sec",
            "range": "stddev: 0.0005162282522892502",
            "extra": "mean: 31.33805216666493 msec\nrounds: 12"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.4407835033711964,
            "unit": "iter/sec",
            "range": "stddev: 0.04836149413131772",
            "extra": "mean: 694.0668030000097 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.4332244042942441,
            "unit": "iter/sec",
            "range": "stddev: 0.050069826147766866",
            "extra": "mean: 697.7274437999995 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.4200060901845601,
            "unit": "iter/sec",
            "range": "stddev: 0.05129116661601383",
            "extra": "mean: 704.2223318000197 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.596601263854984,
            "unit": "iter/sec",
            "range": "stddev: 0.05414707410563692",
            "extra": "mean: 1.6761613838000016 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.46217430239984864,
            "unit": "iter/sec",
            "range": "stddev: 0.05572074674595085",
            "extra": "mean: 2.163685853599998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.8156998653618865,
            "unit": "iter/sec",
            "range": "stddev: 0.005129472715181833",
            "extra": "mean: 1.2259411119999981 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.90575670597923,
            "unit": "iter/sec",
            "range": "stddev: 0.050792618769902535",
            "extra": "mean: 256.0323326000116 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.294259156666729,
            "unit": "iter/sec",
            "range": "stddev: 0.060179297796585575",
            "extra": "mean: 435.87054979999493 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.149559009994218,
            "unit": "iter/sec",
            "range": "stddev: 0.05669529136825332",
            "extra": "mean: 465.2116994000039 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.228966571817372,
            "unit": "iter/sec",
            "range": "stddev: 0.05957539441289142",
            "extra": "mean: 448.6384016000102 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 27.3471018359872,
            "unit": "iter/sec",
            "range": "stddev: 0.001164078142774967",
            "extra": "mean: 36.566946142865426 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 6076.43892265256,
            "unit": "iter/sec",
            "range": "stddev: 0.000006926538746814151",
            "extra": "mean: 164.57007348038445 usec\nrounds: 2368"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4353.981261215201,
            "unit": "iter/sec",
            "range": "stddev: 0.00000692508403042643",
            "extra": "mean: 229.67485159109276 usec\nrounds: 2702"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1052.650134832757,
            "unit": "iter/sec",
            "range": "stddev: 0.000008908540059140956",
            "extra": "mean: 949.9832536086437 usec\nrounds: 970"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 563.5537771913278,
            "unit": "iter/sec",
            "range": "stddev: 0.00003900390569202796",
            "extra": "mean: 1.7744535490186197 msec\nrounds: 510"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1791.586100694125,
            "unit": "iter/sec",
            "range": "stddev: 0.000008321641100601255",
            "extra": "mean: 558.1646339032012 usec\nrounds: 1404"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 756.7301223002269,
            "unit": "iter/sec",
            "range": "stddev: 0.000013965589809707072",
            "extra": "mean: 1.32147508144688 msec\nrounds: 442"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1270.991734798704,
            "unit": "iter/sec",
            "range": "stddev: 0.000012268065791548523",
            "extra": "mean: 786.7871777768696 usec\nrounds: 855"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chren@linkedin.com",
            "name": "Cheng Ren",
            "username": "burgerkingeater"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d3aa3eab6517d28c07a12ded4cd46bb3a49948f",
          "message": "rename testing data files (#1278)",
          "timestamp": "2021-01-20T00:07:14+05:30",
          "tree_id": "483e52b8c0e2b59d5b1b47aa4fc7493770d1f647",
          "url": "https://github.com/tensorflow/io/commit/4d3aa3eab6517d28c07a12ded4cd46bb3a49948f"
        },
        "date": 1611081917678,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 4.28260224102601,
            "unit": "iter/sec",
            "range": "stddev: 0.04015897433526243",
            "extra": "mean: 233.50288999998838 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 33.182630333663006,
            "unit": "iter/sec",
            "range": "stddev: 0.0012966740060090473",
            "extra": "mean: 30.13624869230223 msec\nrounds: 13"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.4786944679412632,
            "unit": "iter/sec",
            "range": "stddev: 0.050096800833479393",
            "extra": "mean: 676.272226399999 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.4820813423775443,
            "unit": "iter/sec",
            "range": "stddev: 0.0504575731090235",
            "extra": "mean: 674.7267989999841 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.466488811607531,
            "unit": "iter/sec",
            "range": "stddev: 0.049950882709782596",
            "extra": "mean: 681.90087239999 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5960557646779981,
            "unit": "iter/sec",
            "range": "stddev: 0.0486112524688005",
            "extra": "mean: 1.6776953756000013 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.46219056297554045,
            "unit": "iter/sec",
            "range": "stddev: 0.051674132577297485",
            "extra": "mean: 2.1636097318 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.8222184932969135,
            "unit": "iter/sec",
            "range": "stddev: 0.007626275372994539",
            "extra": "mean: 1.2162217319999968 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 4.024816509863019,
            "unit": "iter/sec",
            "range": "stddev: 0.049363989535797986",
            "extra": "mean: 248.45853159999933 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.3324727196300445,
            "unit": "iter/sec",
            "range": "stddev: 0.05810859791801429",
            "extra": "mean: 428.72955879998926 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.2945266484316185,
            "unit": "iter/sec",
            "range": "stddev: 0.057361727772907906",
            "extra": "mean: 435.81973679997645 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.268693861938939,
            "unit": "iter/sec",
            "range": "stddev: 0.05683421202925893",
            "extra": "mean: 440.7822565999936 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 28.778313731036395,
            "unit": "iter/sec",
            "range": "stddev: 0.0008814545651174483",
            "extra": "mean: 34.7483875999842 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 6134.563099021071,
            "unit": "iter/sec",
            "range": "stddev: 0.000007012746809444979",
            "extra": "mean: 163.01079373681495 usec\nrounds: 2395"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4389.625880194023,
            "unit": "iter/sec",
            "range": "stddev: 0.000006913446606308615",
            "extra": "mean: 227.80984696486246 usec\nrounds: 2751"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1055.926643606572,
            "unit": "iter/sec",
            "range": "stddev: 0.000009174531453744479",
            "extra": "mean: 947.0354840033664 usec\nrounds: 969"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 551.552751797476,
            "unit": "iter/sec",
            "range": "stddev: 0.000018589413433737387",
            "extra": "mean: 1.8130632051803972 msec\nrounds: 502"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1720.739442449022,
            "unit": "iter/sec",
            "range": "stddev: 0.000009221402571140056",
            "extra": "mean: 581.1455095007074 usec\nrounds: 1421"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 764.5158810651453,
            "unit": "iter/sec",
            "range": "stddev: 0.000024925401861750666",
            "extra": "mean: 1.3080173018862231 msec\nrounds: 318"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1278.0707794472335,
            "unit": "iter/sec",
            "range": "stddev: 0.000015414119396354645",
            "extra": "mean: 782.4292801940912 usec\nrounds: 828"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chren@linkedin.com",
            "name": "Cheng Ren",
            "username": "burgerkingeater"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d3aa3eab6517d28c07a12ded4cd46bb3a49948f",
          "message": "rename testing data files (#1278)",
          "timestamp": "2021-01-20T00:07:14+05:30",
          "tree_id": "483e52b8c0e2b59d5b1b47aa4fc7493770d1f647",
          "url": "https://github.com/tensorflow/io/commit/4d3aa3eab6517d28c07a12ded4cd46bb3a49948f"
        },
        "date": 1611082049924,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.685553398819845,
            "unit": "iter/sec",
            "range": "stddev: 0.051782958496475455",
            "extra": "mean: 271.32967339998686 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 32.778317250051344,
            "unit": "iter/sec",
            "range": "stddev: 0.001017786202455431",
            "extra": "mean: 30.507972461534266 msec\nrounds: 13"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.43143914430635,
            "unit": "iter/sec",
            "range": "stddev: 0.0519565306094775",
            "extra": "mean: 698.5976344000164 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.450319581066903,
            "unit": "iter/sec",
            "range": "stddev: 0.05953554814967176",
            "extra": "mean: 689.5032053999898 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.4349504264849098,
            "unit": "iter/sec",
            "range": "stddev: 0.059476476001616145",
            "extra": "mean: 696.8881862000103 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5920668131237585,
            "unit": "iter/sec",
            "range": "stddev: 0.065845601347651",
            "extra": "mean: 1.688998568799991 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.4676242384710408,
            "unit": "iter/sec",
            "range": "stddev: 0.0443501887528977",
            "extra": "mean: 2.1384691333999966 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.8122249721975802,
            "unit": "iter/sec",
            "range": "stddev: 0.008495388552088883",
            "extra": "mean: 1.2311859819999995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.9770898624885436,
            "unit": "iter/sec",
            "range": "stddev: 0.054731311097692734",
            "extra": "mean: 251.4401320000047 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.3279668239734974,
            "unit": "iter/sec",
            "range": "stddev: 0.06318819512800093",
            "extra": "mean: 429.5593861999919 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.286245452386338,
            "unit": "iter/sec",
            "range": "stddev: 0.060720317147140684",
            "extra": "mean: 437.39835499999344 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.2659388063957793,
            "unit": "iter/sec",
            "range": "stddev: 0.05856358361384559",
            "extra": "mean: 441.31818439996096 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 27.968221321079152,
            "unit": "iter/sec",
            "range": "stddev: 0.0008896976920070607",
            "extra": "mean: 35.754865800004154 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 6126.032836291362,
            "unit": "iter/sec",
            "range": "stddev: 0.000006554353424919431",
            "extra": "mean: 163.2377799341653 usec\nrounds: 2422"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4395.147580207181,
            "unit": "iter/sec",
            "range": "stddev: 0.000007140855275396703",
            "extra": "mean: 227.52364550927356 usec\nrounds: 2694"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1053.710475817798,
            "unit": "iter/sec",
            "range": "stddev: 0.000008871117326114988",
            "extra": "mean: 949.0272925529069 usec\nrounds: 940"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 563.1525880550522,
            "unit": "iter/sec",
            "range": "stddev: 0.00004016326530472552",
            "extra": "mean: 1.775717667308745 msec\nrounds: 517"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1795.8042864496601,
            "unit": "iter/sec",
            "range": "stddev: 0.000007825151508666196",
            "extra": "mean: 556.853554446637 usec\nrounds: 1405"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 764.2222062414669,
            "unit": "iter/sec",
            "range": "stddev: 0.00001411272811962357",
            "extra": "mean: 1.3085199459436223 msec\nrounds: 444"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1277.2301924915162,
            "unit": "iter/sec",
            "range": "stddev: 0.000012265441031454067",
            "extra": "mean: 782.944222489199 usec\nrounds: 836"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chren@linkedin.com",
            "name": "Cheng Ren",
            "username": "burgerkingeater"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33ad81f0dfbf1ab4b8ce08b29bc9ccea5a54e38e",
          "message": "Add tutorial for avro dataset API (#1250)",
          "timestamp": "2021-01-19T15:02:21-08:00",
          "tree_id": "9e71f18d6910d8e2ae667ff3fdd54dd407a8adb0",
          "url": "https://github.com/tensorflow/io/commit/33ad81f0dfbf1ab4b8ce08b29bc9ccea5a54e38e"
        },
        "date": 1611097674801,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 4.222063364367316,
            "unit": "iter/sec",
            "range": "stddev: 0.04507548324080852",
            "extra": "mean: 236.85101659999646 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 32.79405527529656,
            "unit": "iter/sec",
            "range": "stddev: 0.0010898145562340967",
            "extra": "mean: 30.49333153845387 msec\nrounds: 13"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.4265828137038183,
            "unit": "iter/sec",
            "range": "stddev: 0.05960143292625085",
            "extra": "mean: 700.9757796000031 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.4322903906227633,
            "unit": "iter/sec",
            "range": "stddev: 0.05916641958510352",
            "extra": "mean: 698.1824401999916 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.4180475909534225,
            "unit": "iter/sec",
            "range": "stddev: 0.05960209065703695",
            "extra": "mean: 705.1949499999864 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5829585999085518,
            "unit": "iter/sec",
            "range": "stddev: 0.0661950691709888",
            "extra": "mean: 1.7153876796000076 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.44954181551381467,
            "unit": "iter/sec",
            "range": "stddev: 0.06420439059071958",
            "extra": "mean: 2.2244871678000093 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.759944882407512,
            "unit": "iter/sec",
            "range": "stddev: 0.011519420433909194",
            "extra": "mean: 1.3158849057999986 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.8022818112158245,
            "unit": "iter/sec",
            "range": "stddev: 0.06557958170843056",
            "extra": "mean: 262.9999694000162 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.210827039930488,
            "unit": "iter/sec",
            "range": "stddev: 0.07599908830798588",
            "extra": "mean: 452.3194179999905 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.1794039683908215,
            "unit": "iter/sec",
            "range": "stddev: 0.0752263074226225",
            "extra": "mean: 458.8410475999808 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.135943203031804,
            "unit": "iter/sec",
            "range": "stddev: 0.07754869118568845",
            "extra": "mean: 468.177242999991 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 24.175292648799715,
            "unit": "iter/sec",
            "range": "stddev: 0.00033194066648933163",
            "extra": "mean: 41.364545800013275 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 6120.270387067691,
            "unit": "iter/sec",
            "range": "stddev: 0.00000832631014529124",
            "extra": "mean: 163.39147402915873 usec\nrounds: 2137"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4415.8336093984535,
            "unit": "iter/sec",
            "range": "stddev: 0.000008061778931031407",
            "extra": "mean: 226.45780807312278 usec\nrounds: 2725"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1052.1584078429935,
            "unit": "iter/sec",
            "range": "stddev: 0.000011552653469404465",
            "extra": "mean: 950.4272289664801 usec\nrounds: 939"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 555.1626164633007,
            "unit": "iter/sec",
            "range": "stddev: 0.00004172074169006323",
            "extra": "mean: 1.80127402376364 msec\nrounds: 505"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1752.4190678371237,
            "unit": "iter/sec",
            "range": "stddev: 0.00000926246019360223",
            "extra": "mean: 570.6397621170735 usec\nrounds: 1341"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 769.8958681692162,
            "unit": "iter/sec",
            "range": "stddev: 0.000016149559315791203",
            "extra": "mean: 1.2988769538119003 msec\nrounds: 433"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1272.8750211750262,
            "unit": "iter/sec",
            "range": "stddev: 0.000014143373939521619",
            "extra": "mean: 785.6230842497579 usec\nrounds: 819"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chren@linkedin.com",
            "name": "Cheng Ren",
            "username": "burgerkingeater"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33ad81f0dfbf1ab4b8ce08b29bc9ccea5a54e38e",
          "message": "Add tutorial for avro dataset API (#1250)",
          "timestamp": "2021-01-19T15:02:21-08:00",
          "tree_id": "9e71f18d6910d8e2ae667ff3fdd54dd407a8adb0",
          "url": "https://github.com/tensorflow/io/commit/33ad81f0dfbf1ab4b8ce08b29bc9ccea5a54e38e"
        },
        "date": 1611097756962,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 4.092620805377086,
            "unit": "iter/sec",
            "range": "stddev: 0.05287912797134335",
            "extra": "mean: 244.34220700001106 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 29.25709813223348,
            "unit": "iter/sec",
            "range": "stddev: 0.00034830034593168066",
            "extra": "mean: 34.17973975000166 msec\nrounds: 12"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.4195476823390694,
            "unit": "iter/sec",
            "range": "stddev: 0.06705886991163983",
            "extra": "mean: 704.4497429999979 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.4147181731340064,
            "unit": "iter/sec",
            "range": "stddev: 0.06775460018344351",
            "extra": "mean: 706.8545657999948 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.396281969202143,
            "unit": "iter/sec",
            "range": "stddev: 0.06770415107071781",
            "extra": "mean: 716.1877200000049 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5772425256231559,
            "unit": "iter/sec",
            "range": "stddev: 0.07518031809427844",
            "extra": "mean: 1.7323740985999962 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.44911953839046853,
            "unit": "iter/sec",
            "range": "stddev: 0.06666325904105164",
            "extra": "mean: 2.2265787046000014 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7454185839222175,
            "unit": "iter/sec",
            "range": "stddev: 0.013293820267444776",
            "extra": "mean: 1.3415281313999912 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.796597951189736,
            "unit": "iter/sec",
            "range": "stddev: 0.06826151403634845",
            "extra": "mean: 263.3937048000121 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.1833400651165276,
            "unit": "iter/sec",
            "range": "stddev: 0.0791382284761269",
            "extra": "mean: 458.0138550000129 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.019170862683516,
            "unit": "iter/sec",
            "range": "stddev: 0.08130165724865358",
            "extra": "mean: 495.2527883999778 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.114344452490243,
            "unit": "iter/sec",
            "range": "stddev: 0.079986750412901",
            "extra": "mean: 472.9598334000002 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 24.509718532319717,
            "unit": "iter/sec",
            "range": "stddev: 0.0012206543014187325",
            "extra": "mean: 40.80014214285451 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5989.054092256668,
            "unit": "iter/sec",
            "range": "stddev: 0.000009084843750706472",
            "extra": "mean: 166.97127536265103 usec\nrounds: 2208"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4378.232164302139,
            "unit": "iter/sec",
            "range": "stddev: 0.000008002661460482683",
            "extra": "mean: 228.40268913866365 usec\nrounds: 2670"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1047.5137038488242,
            "unit": "iter/sec",
            "range": "stddev: 0.00001038999892604951",
            "extra": "mean: 954.6414489144655 usec\nrounds: 920"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 545.0907451696094,
            "unit": "iter/sec",
            "range": "stddev: 0.000015055571388517012",
            "extra": "mean: 1.834556922607156 msec\nrounds: 491"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1703.923669238419,
            "unit": "iter/sec",
            "range": "stddev: 0.00001100849826384062",
            "extra": "mean: 586.8807494451656 usec\nrounds: 1353"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 760.2243930429518,
            "unit": "iter/sec",
            "range": "stddev: 0.000016590169197092526",
            "extra": "mean: 1.3154010962438312 msec\nrounds: 426"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1270.209414830905,
            "unit": "iter/sec",
            "range": "stddev: 0.0000177583177104742",
            "extra": "mean: 787.271758754145 usec\nrounds: 771"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "171b826db86c7ea3792beb4ebde34cd5f1040521",
          "message": "remove docker based mongodb tests in macos (#1279)",
          "timestamp": "2021-01-20T08:40:36-08:00",
          "tree_id": "9efab47cc944423e5f301267aaaa1484f2fbadbd",
          "url": "https://github.com/tensorflow/io/commit/171b826db86c7ea3792beb4ebde34cd5f1040521"
        },
        "date": 1611162002721,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.227392388067871,
            "unit": "iter/sec",
            "range": "stddev: 0.04009915851522333",
            "extra": "mean: 309.84766640001453 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 24.64533365855172,
            "unit": "iter/sec",
            "range": "stddev: 0.003117135925691325",
            "extra": "mean: 40.5756324444408 msec\nrounds: 9"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2700745403598486,
            "unit": "iter/sec",
            "range": "stddev: 0.05910303520850433",
            "extra": "mean: 787.3553623999669 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.2661453746108222,
            "unit": "iter/sec",
            "range": "stddev: 0.059810890161288606",
            "extra": "mean: 789.7987230000126 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.226440810651344,
            "unit": "iter/sec",
            "range": "stddev: 0.05059458876339837",
            "extra": "mean: 815.3675182000143 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.4433313882091816,
            "unit": "iter/sec",
            "range": "stddev: 0.12044405927213124",
            "extra": "mean: 2.2556489944000075 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.35902357178616523,
            "unit": "iter/sec",
            "range": "stddev: 0.17585069937725462",
            "extra": "mean: 2.785332436600015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7061241365246212,
            "unit": "iter/sec",
            "range": "stddev: 0.009233634076940524",
            "extra": "mean: 1.4161815866000098 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.459463128809259,
            "unit": "iter/sec",
            "range": "stddev: 0.05786197035666411",
            "extra": "mean: 289.062193399991 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.005645741938971,
            "unit": "iter/sec",
            "range": "stddev: 0.06719139078219823",
            "extra": "mean: 498.59253760000684 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.7401195816997872,
            "unit": "iter/sec",
            "range": "stddev: 0.06994109462833023",
            "extra": "mean: 574.6731491999981 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.8019123424683348,
            "unit": "iter/sec",
            "range": "stddev: 0.07302928383285938",
            "extra": "mean: 554.9659527999893 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 21.262648352154564,
            "unit": "iter/sec",
            "range": "stddev: 0.0027310359134360062",
            "extra": "mean: 47.03083000000182 msec\nrounds: 6"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5298.67136360949,
            "unit": "iter/sec",
            "range": "stddev: 0.00000864039987650291",
            "extra": "mean: 188.72655640956629 usec\nrounds: 2216"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3783.7256316653525,
            "unit": "iter/sec",
            "range": "stddev: 0.000008314705228733105",
            "extra": "mean: 264.2897760955951 usec\nrounds: 2510"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 883.7472881820798,
            "unit": "iter/sec",
            "range": "stddev: 0.000010506968149323942",
            "extra": "mean: 1.131545197787321 msec\nrounds: 814"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 470.87934939766944,
            "unit": "iter/sec",
            "range": "stddev: 0.000027273359915997377",
            "extra": "mean: 2.1236862505844885 msec\nrounds: 431"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1436.4727583752856,
            "unit": "iter/sec",
            "range": "stddev: 0.0000437062260683349",
            "extra": "mean: 696.1496444464734 usec\nrounds: 1170"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 655.24902749891,
            "unit": "iter/sec",
            "range": "stddev: 0.00003733400170790281",
            "extra": "mean: 1.5261373279972759 msec\nrounds: 375"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1093.5175270415552,
            "unit": "iter/sec",
            "range": "stddev: 0.000026124053976047454",
            "extra": "mean: 914.4800840142352 usec\nrounds: 738"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "171b826db86c7ea3792beb4ebde34cd5f1040521",
          "message": "remove docker based mongodb tests in macos (#1279)",
          "timestamp": "2021-01-20T08:40:36-08:00",
          "tree_id": "9efab47cc944423e5f301267aaaa1484f2fbadbd",
          "url": "https://github.com/tensorflow/io/commit/171b826db86c7ea3792beb4ebde34cd5f1040521"
        },
        "date": 1611162066015,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.568623793714776,
            "unit": "iter/sec",
            "range": "stddev: 0.052788827524655996",
            "extra": "mean: 280.2200674000005 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 25.542494070958202,
            "unit": "iter/sec",
            "range": "stddev: 0.001178950035870877",
            "extra": "mean: 39.15044463637555 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2563631675515077,
            "unit": "iter/sec",
            "range": "stddev: 0.06428232710509948",
            "extra": "mean: 795.9481985999901 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.2908305922713168,
            "unit": "iter/sec",
            "range": "stddev: 0.0480773641471506",
            "extra": "mean: 774.6949956000208 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.255865668482878,
            "unit": "iter/sec",
            "range": "stddev: 0.05739473536829998",
            "extra": "mean: 796.2635057999705 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.49908630548207444,
            "unit": "iter/sec",
            "range": "stddev: 0.09568503964299635",
            "extra": "mean: 2.003661469000008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.40350596418949397,
            "unit": "iter/sec",
            "range": "stddev: 0.06838502247429842",
            "extra": "mean: 2.4782781142000205 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7149529134513661,
            "unit": "iter/sec",
            "range": "stddev: 0.06571782966418843",
            "extra": "mean: 1.3986935099999755 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.641229261404558,
            "unit": "iter/sec",
            "range": "stddev: 0.007427754280481903",
            "extra": "mean: 274.63252879997526 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.021847439676933,
            "unit": "iter/sec",
            "range": "stddev: 0.06555094816439547",
            "extra": "mean: 494.5971591999978 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.9263074852026887,
            "unit": "iter/sec",
            "range": "stddev: 0.06515698854749447",
            "extra": "mean: 519.1279209999948 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.9109655935782612,
            "unit": "iter/sec",
            "range": "stddev: 0.06390775141575991",
            "extra": "mean: 523.2956591999709 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 20.554370205961856,
            "unit": "iter/sec",
            "range": "stddev: 0.0014639679124157754",
            "extra": "mean: 48.65145416666413 msec\nrounds: 6"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5264.302465066802,
            "unit": "iter/sec",
            "range": "stddev: 0.000009103281856271525",
            "extra": "mean: 189.95868999470767 usec\nrounds: 2129"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3735.2418804666895,
            "unit": "iter/sec",
            "range": "stddev: 0.000009909378730138902",
            "extra": "mean: 267.7202794361092 usec\nrounds: 2344"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 877.4935268830267,
            "unit": "iter/sec",
            "range": "stddev: 0.000015219357839636094",
            "extra": "mean: 1.1396095462403382 msec\nrounds: 811"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 457.4260961261787,
            "unit": "iter/sec",
            "range": "stddev: 0.000016566380673322343",
            "extra": "mean: 2.1861454964391775 msec\nrounds: 421"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1436.5065950326175,
            "unit": "iter/sec",
            "range": "stddev: 0.00004041967835365196",
            "extra": "mean: 696.1332467654239 usec\nrounds: 1159"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 658.531249609449,
            "unit": "iter/sec",
            "range": "stddev: 0.000032384469194429654",
            "extra": "mean: 1.518530822330852 msec\nrounds: 394"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1103.7638551197317,
            "unit": "iter/sec",
            "range": "stddev: 0.00001603747730499637",
            "extra": "mean: 905.9908923104972 usec\nrounds: 715"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a507a337137c14b26e52cd94b7d59e3eed6587d",
          "message": "trigger benchmarks workflow only on commits (#1282)",
          "timestamp": "2021-01-25T17:39:30-08:00",
          "tree_id": "a8d73beb997452f9d6dc38f394c382d166ff567f",
          "url": "https://github.com/tensorflow/io/commit/5a507a337137c14b26e52cd94b7d59e3eed6587d"
        },
        "date": 1611625565141,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 4.025283410503964,
            "unit": "iter/sec",
            "range": "stddev: 0.04079260438644628",
            "extra": "mean: 248.42971240000224 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 30.06671028794909,
            "unit": "iter/sec",
            "range": "stddev: 0.0017688829131217835",
            "extra": "mean: 33.259375250002186 msec\nrounds: 12"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.4176267992371057,
            "unit": "iter/sec",
            "range": "stddev: 0.05968433423958773",
            "extra": "mean: 705.4042717999891 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.404360548829018,
            "unit": "iter/sec",
            "range": "stddev: 0.0546095690767885",
            "extra": "mean: 712.0678524000255 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.400278428450159,
            "unit": "iter/sec",
            "range": "stddev: 0.057468424197361395",
            "extra": "mean: 714.1436871999872 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5433328844787939,
            "unit": "iter/sec",
            "range": "stddev: 0.06764509433361944",
            "extra": "mean: 1.8404923179999968 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.4179011804644528,
            "unit": "iter/sec",
            "range": "stddev: 0.06984873265116572",
            "extra": "mean: 2.392910206400006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7755602236008337,
            "unit": "iter/sec",
            "range": "stddev: 0.05567409055823743",
            "extra": "mean: 1.2893905200000062 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 4.252665503757994,
            "unit": "iter/sec",
            "range": "stddev: 0.003056292950925888",
            "extra": "mean: 235.1466390000155 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.2194371885925723,
            "unit": "iter/sec",
            "range": "stddev: 0.06441678385746026",
            "extra": "mean: 450.56467699999985 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.025222495216551,
            "unit": "iter/sec",
            "range": "stddev: 0.0633939299305674",
            "extra": "mean: 493.77290759999823 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.1027842196654762,
            "unit": "iter/sec",
            "range": "stddev: 0.057612075382976316",
            "extra": "mean: 475.55996979998554 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 24.411029341069455,
            "unit": "iter/sec",
            "range": "stddev: 0.0013500277215144536",
            "extra": "mean: 40.9650894285554 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5802.639257381739,
            "unit": "iter/sec",
            "range": "stddev: 0.000015456416087437107",
            "extra": "mean: 172.335372861214 usec\nrounds: 2513"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4037.012660059306,
            "unit": "iter/sec",
            "range": "stddev: 0.00001934296881865247",
            "extra": "mean: 247.70791776147396 usec\nrounds: 2590"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 956.3669515344106,
            "unit": "iter/sec",
            "range": "stddev: 0.00007428274867103747",
            "extra": "mean: 1.0456237518408429 msec\nrounds: 951"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 502.40331607105395,
            "unit": "iter/sec",
            "range": "stddev: 0.00011155156365362546",
            "extra": "mean: 1.9904327221012446 msec\nrounds: 457"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1604.944395385139,
            "unit": "iter/sec",
            "range": "stddev: 0.00004981463580741062",
            "extra": "mean: 623.0745456823317 usec\nrounds: 1204"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 683.1558684064366,
            "unit": "iter/sec",
            "range": "stddev: 0.00007229285422684864",
            "extra": "mean: 1.4637947886368157 msec\nrounds: 440"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1143.0591111486247,
            "unit": "iter/sec",
            "range": "stddev: 0.00004639198856325617",
            "extra": "mean: 874.8453953489168 usec\nrounds: 774"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a507a337137c14b26e52cd94b7d59e3eed6587d",
          "message": "trigger benchmarks workflow only on commits (#1282)",
          "timestamp": "2021-01-25T17:39:30-08:00",
          "tree_id": "a8d73beb997452f9d6dc38f394c382d166ff567f",
          "url": "https://github.com/tensorflow/io/commit/5a507a337137c14b26e52cd94b7d59e3eed6587d"
        },
        "date": 1611625671001,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.7035859461310565,
            "unit": "iter/sec",
            "range": "stddev: 0.040391208134315765",
            "extra": "mean: 270.0085847999958 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 29.300992382520235,
            "unit": "iter/sec",
            "range": "stddev: 0.0014390021150474512",
            "extra": "mean: 34.12853690909659 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.325305229755303,
            "unit": "iter/sec",
            "range": "stddev: 0.06258538757458752",
            "extra": "mean: 754.5431629999939 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.3385197153058543,
            "unit": "iter/sec",
            "range": "stddev: 0.055691526634973496",
            "extra": "mean: 747.0939639999983 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.3182158633234946,
            "unit": "iter/sec",
            "range": "stddev: 0.0519100942992526",
            "extra": "mean: 758.6010969999961 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5085420705091803,
            "unit": "iter/sec",
            "range": "stddev: 0.057772872429911776",
            "extra": "mean: 1.9664056486000163 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3887655452098019,
            "unit": "iter/sec",
            "range": "stddev: 0.0586570551051079",
            "extra": "mean: 2.572244408800009 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7434265967549694,
            "unit": "iter/sec",
            "range": "stddev: 0.06024569066409846",
            "extra": "mean: 1.345122712000034 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.987370368007586,
            "unit": "iter/sec",
            "range": "stddev: 0.002362767787284188",
            "extra": "mean: 250.79185219999545 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.106105336655337,
            "unit": "iter/sec",
            "range": "stddev: 0.06207319268264486",
            "extra": "mean: 474.8100594000107 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.0451887171239735,
            "unit": "iter/sec",
            "range": "stddev: 0.06851673779215506",
            "extra": "mean: 488.95243340000434 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.009610199538889,
            "unit": "iter/sec",
            "range": "stddev: 0.06271949928964034",
            "extra": "mean: 497.6089394000155 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 25.941279223987635,
            "unit": "iter/sec",
            "range": "stddev: 0.0009147095345985145",
            "extra": "mean: 38.548600142868445 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5499.888661073788,
            "unit": "iter/sec",
            "range": "stddev: 0.000012768783231352153",
            "extra": "mean: 181.82186251835174 usec\nrounds: 2153"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3901.325837423209,
            "unit": "iter/sec",
            "range": "stddev: 0.000013981472982445399",
            "extra": "mean: 256.32311723557325 usec\nrounds: 2576"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 922.3083868994569,
            "unit": "iter/sec",
            "range": "stddev: 0.000047275246610692246",
            "extra": "mean: 1.0842360475130457 msec\nrounds: 884"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 488.23269673280737,
            "unit": "iter/sec",
            "range": "stddev: 0.00009554585018243606",
            "extra": "mean: 2.0482036674148945 msec\nrounds: 445"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1551.074595578866,
            "unit": "iter/sec",
            "range": "stddev: 0.0000427445671281326",
            "extra": "mean: 644.7143179640544 usec\nrounds: 1258"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 689.5575802224608,
            "unit": "iter/sec",
            "range": "stddev: 0.00006826146132586164",
            "extra": "mean: 1.4502052166222088 msec\nrounds: 397"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1139.119222405833,
            "unit": "iter/sec",
            "range": "stddev: 0.000035501458101574094",
            "extra": "mean: 877.8712362416187 usec\nrounds: 745"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e8fa4fe9b213e9eb1007710748b5e2cd03eb173",
          "message": "Bump Apache Arrow to 3.0.0 (#1285)\n\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-01-27T11:18:15+05:30",
          "tree_id": "e1d68828e7bd83e2575db40840d0d83f39249fad",
          "url": "https://github.com/tensorflow/io/commit/4e8fa4fe9b213e9eb1007710748b5e2cd03eb173"
        },
        "date": 1611726900439,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 4.333917280144807,
            "unit": "iter/sec",
            "range": "stddev: 0.04294244718847738",
            "extra": "mean: 230.73813720011458 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 31.86122160975409,
            "unit": "iter/sec",
            "range": "stddev: 0.0012376277102473716",
            "extra": "mean: 31.38611608331606 msec\nrounds: 12"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.4727624168391975,
            "unit": "iter/sec",
            "range": "stddev: 0.05159230054328557",
            "extra": "mean: 678.9961425999536 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.4856570175923072,
            "unit": "iter/sec",
            "range": "stddev: 0.04790798215740573",
            "extra": "mean: 673.1028684000194 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.4546264591488276,
            "unit": "iter/sec",
            "range": "stddev: 0.05266846867953408",
            "extra": "mean: 687.4617148000652 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.6043205741113884,
            "unit": "iter/sec",
            "range": "stddev: 0.05510789046959572",
            "extra": "mean: 1.6547508770000605 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.46424041779102887,
            "unit": "iter/sec",
            "range": "stddev: 0.056804272626925806",
            "extra": "mean: 2.154056307200153 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.8237818587849407,
            "unit": "iter/sec",
            "range": "stddev: 0.0564040272237694",
            "extra": "mean: 1.2139135978000013 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 4.378090509412815,
            "unit": "iter/sec",
            "range": "stddev: 0.00025592692052194536",
            "extra": "mean: 228.41007920005723 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.3076333348798634,
            "unit": "iter/sec",
            "range": "stddev: 0.06274239606209946",
            "extra": "mean: 433.3444073999999 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.156901851165851,
            "unit": "iter/sec",
            "range": "stddev: 0.06146499603593638",
            "extra": "mean: 463.62795760014706 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.2336785600149445,
            "unit": "iter/sec",
            "range": "stddev: 0.06141951547544438",
            "extra": "mean: 447.6919901999281 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 25.794154101346727,
            "unit": "iter/sec",
            "range": "stddev: 0.0005720333069642013",
            "extra": "mean: 38.76847428572156 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 6121.770907519643,
            "unit": "iter/sec",
            "range": "stddev: 0.000007516349301415567",
            "extra": "mean: 163.35142479305387 usec\nrounds: 2380"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4373.915434376442,
            "unit": "iter/sec",
            "range": "stddev: 0.000007237894770526874",
            "extra": "mean: 228.62810564204767 usec\nrounds: 2783"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1050.1974100274965,
            "unit": "iter/sec",
            "range": "stddev: 0.000010585572400160674",
            "extra": "mean: 952.201929324714 usec\nrounds: 962"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 557.4374889944188,
            "unit": "iter/sec",
            "range": "stddev: 0.000048604539770342894",
            "extra": "mean: 1.7939231209654296 msec\nrounds: 496"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1756.0255531652058,
            "unit": "iter/sec",
            "range": "stddev: 0.000009135409816837654",
            "extra": "mean: 569.4677951568058 usec\nrounds: 1362"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 769.6075523668126,
            "unit": "iter/sec",
            "range": "stddev: 0.000024922611650761188",
            "extra": "mean: 1.2993635482456611 msec\nrounds: 456"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1291.2641367976992,
            "unit": "iter/sec",
            "range": "stddev: 0.000012943288614085842",
            "extra": "mean: 774.4348901999041 usec\nrounds: 847"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e8fa4fe9b213e9eb1007710748b5e2cd03eb173",
          "message": "Bump Apache Arrow to 3.0.0 (#1285)\n\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-01-27T11:18:15+05:30",
          "tree_id": "e1d68828e7bd83e2575db40840d0d83f39249fad",
          "url": "https://github.com/tensorflow/io/commit/4e8fa4fe9b213e9eb1007710748b5e2cd03eb173"
        },
        "date": 1611727048312,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.2554275003261446,
            "unit": "iter/sec",
            "range": "stddev: 0.04375345879805819",
            "extra": "mean: 307.17931820008744 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 27.040355929326726,
            "unit": "iter/sec",
            "range": "stddev: 0.0026986201092207072",
            "extra": "mean: 36.98176172730945 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7954029542450997,
            "unit": "iter/sec",
            "range": "stddev: 0.03298428126025155",
            "extra": "mean: 1.25722439759993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.8444761097462444,
            "unit": "iter/sec",
            "range": "stddev: 0.04234933632024118",
            "extra": "mean: 1.1841661220001698 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.843303640310789,
            "unit": "iter/sec",
            "range": "stddev: 0.061136597043434465",
            "extra": "mean: 1.18581250240004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.39648787233233873,
            "unit": "iter/sec",
            "range": "stddev: 0.11328855817479348",
            "extra": "mean: 2.522145240199916 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.30496948852607236,
            "unit": "iter/sec",
            "range": "stddev: 0.08737069769548923",
            "extra": "mean: 3.2790165495998735 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.67185618398315,
            "unit": "iter/sec",
            "range": "stddev: 0.07663467984536601",
            "extra": "mean: 1.4884137763999206 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 2.4103491135193815,
            "unit": "iter/sec",
            "range": "stddev: 0.011883522671149468",
            "extra": "mean: 414.8776600000019 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.5557218598717077,
            "unit": "iter/sec",
            "range": "stddev: 0.06228717800143188",
            "extra": "mean: 642.7884223999172 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.4845997449032176,
            "unit": "iter/sec",
            "range": "stddev: 0.07270124854285176",
            "extra": "mean: 673.5822253998776 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.4529989019576104,
            "unit": "iter/sec",
            "range": "stddev: 0.05002128535686897",
            "extra": "mean: 688.2317658001739 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 23.48173013181853,
            "unit": "iter/sec",
            "range": "stddev: 0.0016065345337132144",
            "extra": "mean: 42.58629983337414 msec\nrounds: 6"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3726.6105193347216,
            "unit": "iter/sec",
            "range": "stddev: 0.00010288554272301781",
            "extra": "mean: 268.34035776256036 usec\nrounds: 1951"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3057.189401195,
            "unit": "iter/sec",
            "range": "stddev: 0.0000823628158010849",
            "extra": "mean: 327.0978237753664 usec\nrounds: 1935"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 896.9925897551237,
            "unit": "iter/sec",
            "range": "stddev: 0.00015278482472383915",
            "extra": "mean: 1.114836411606251 msec\nrounds: 724"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 550.9625969232104,
            "unit": "iter/sec",
            "range": "stddev: 0.00021277406941447972",
            "extra": "mean: 1.8150052391657603 msec\nrounds: 485"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1477.5430165126445,
            "unit": "iter/sec",
            "range": "stddev: 0.00012067826878512595",
            "extra": "mean: 676.7992463327664 usec\nrounds: 1433"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 517.2813163800303,
            "unit": "iter/sec",
            "range": "stddev: 0.00017796976352461128",
            "extra": "mean: 1.9331840689667044 msec\nrounds: 377"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 905.6428289936067,
            "unit": "iter/sec",
            "range": "stddev: 0.00019527866956685477",
            "extra": "mean: 1.1041880617674051 msec\nrounds: 680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d63a0b64f780eae74de8076d1d7f3ba1cf20d80",
          "message": "Add bazel cache (#1287)\n\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-01-28T18:54:15-08:00",
          "tree_id": "3949b52771d3d2ff10300cef8a58bd917b5560be",
          "url": "https://github.com/tensorflow/io/commit/8d63a0b64f780eae74de8076d1d7f3ba1cf20d80"
        },
        "date": 1611889771570,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5895.885174185953,
            "unit": "iter/sec",
            "range": "stddev: 0.00003049363672459609",
            "extra": "mean: 169.60981607618749 usec\nrounds: 1381"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4272.333246158171,
            "unit": "iter/sec",
            "range": "stddev: 0.00003962843302690557",
            "extra": "mean: 234.06413834857906 usec\nrounds: 2725"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 998.6564049120869,
            "unit": "iter/sec",
            "range": "stddev: 0.00017543383465075087",
            "extra": "mean: 1.0013454027644588 msec\nrounds: 941"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 492.75207673740596,
            "unit": "iter/sec",
            "range": "stddev: 0.0002992996884700036",
            "extra": "mean: 2.0294181338030426 msec\nrounds: 568"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1732.034232942347,
            "unit": "iter/sec",
            "range": "stddev: 0.00008334661500662252",
            "extra": "mean: 577.355794118006 usec\nrounds: 1156"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 707.3622602217127,
            "unit": "iter/sec",
            "range": "stddev: 0.00018597732064439218",
            "extra": "mean: 1.4137027888462188 msec\nrounds: 251"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1232.4544629524194,
            "unit": "iter/sec",
            "range": "stddev: 0.00014014863874805931",
            "extra": "mean: 811.3890046731944 usec\nrounds: 642"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 4.086075010463643,
            "unit": "iter/sec",
            "range": "stddev: 0.03227417275238259",
            "extra": "mean: 244.7336373999974 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 31.70047904788682,
            "unit": "iter/sec",
            "range": "stddev: 0.001660668312521688",
            "extra": "mean: 31.54526461538318 msec\nrounds: 13"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.4689000729392985,
            "unit": "iter/sec",
            "range": "stddev: 0.04582704531072623",
            "extra": "mean: 680.78150340001 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.418018103124201,
            "unit": "iter/sec",
            "range": "stddev: 0.04353341727430121",
            "extra": "mean: 705.2096145999712 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.3681613912685615,
            "unit": "iter/sec",
            "range": "stddev: 0.05293117267124334",
            "extra": "mean: 730.9079224000016 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5318768208556908,
            "unit": "iter/sec",
            "range": "stddev: 0.04902513685290087",
            "extra": "mean: 1.8801345740000215 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.4034104031155706,
            "unit": "iter/sec",
            "range": "stddev: 0.05326165247471786",
            "extra": "mean: 2.47886517620002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7808830528044011,
            "unit": "iter/sec",
            "range": "stddev: 0.07901605522268157",
            "extra": "mean: 1.2806014887999937 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.893369568497964,
            "unit": "iter/sec",
            "range": "stddev: 0.05064403543897523",
            "extra": "mean: 256.8469246000177 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.27022102920077,
            "unit": "iter/sec",
            "range": "stddev: 0.05607144275964983",
            "extra": "mean: 440.48574439998447 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.1644423621776254,
            "unit": "iter/sec",
            "range": "stddev: 0.061364498911095446",
            "extra": "mean: 462.01276480003344 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.0510080711026513,
            "unit": "iter/sec",
            "range": "stddev: 0.06540400038984828",
            "extra": "mean: 487.56512180002574 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 28.077348068090163,
            "unit": "iter/sec",
            "range": "stddev: 0.0016593053572774529",
            "extra": "mean: 35.61589924998998 msec\nrounds: 8"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d63a0b64f780eae74de8076d1d7f3ba1cf20d80",
          "message": "Add bazel cache (#1287)\n\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-01-28T18:54:15-08:00",
          "tree_id": "3949b52771d3d2ff10300cef8a58bd917b5560be",
          "url": "https://github.com/tensorflow/io/commit/8d63a0b64f780eae74de8076d1d7f3ba1cf20d80"
        },
        "date": 1611889886944,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5371.51520663421,
            "unit": "iter/sec",
            "range": "stddev: 0.00001017008947708267",
            "extra": "mean: 186.16721009463544 usec\nrounds: 1466"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3857.140171260802,
            "unit": "iter/sec",
            "range": "stddev: 0.000017334433505448644",
            "extra": "mean: 259.2594397919237 usec\nrounds: 2699"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 911.1881977096855,
            "unit": "iter/sec",
            "range": "stddev: 0.000025615016428978086",
            "extra": "mean: 1.0974681218584121 msec\nrounds: 796"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 484.67229437640185,
            "unit": "iter/sec",
            "range": "stddev: 0.00005444354543677985",
            "extra": "mean: 2.0632497702115176 msec\nrounds: 470"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1403.9001290092258,
            "unit": "iter/sec",
            "range": "stddev: 0.00004390996279344608",
            "extra": "mean: 712.3013805160982 usec\nrounds: 1201"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 672.2006936980843,
            "unit": "iter/sec",
            "range": "stddev: 0.000047849759878823746",
            "extra": "mean: 1.4876509491511254 msec\nrounds: 236"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1100.1504649972346,
            "unit": "iter/sec",
            "range": "stddev: 0.000022447412920754288",
            "extra": "mean: 908.966574860752 usec\nrounds: 708"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.628667720349503,
            "unit": "iter/sec",
            "range": "stddev: 0.03532010344212563",
            "extra": "mean: 275.58323800000153 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 29.32909093898989,
            "unit": "iter/sec",
            "range": "stddev: 0.00047854594242053986",
            "extra": "mean: 34.09584027272414 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.283071963824548,
            "unit": "iter/sec",
            "range": "stddev: 0.05106118526701774",
            "extra": "mean: 779.3795111999998 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.297027486078087,
            "unit": "iter/sec",
            "range": "stddev: 0.051058841369300945",
            "extra": "mean: 770.9936841999934 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.2519575135067034,
            "unit": "iter/sec",
            "range": "stddev: 0.05921108412725552",
            "extra": "mean: 798.7491502000125 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.4822042691906347,
            "unit": "iter/sec",
            "range": "stddev: 0.07676346411043863",
            "extra": "mean: 2.0738099264000085 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3895103774689985,
            "unit": "iter/sec",
            "range": "stddev: 0.05514902730768759",
            "extra": "mean: 2.567325693600014 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7283153016754184,
            "unit": "iter/sec",
            "range": "stddev: 0.016488088956433604",
            "extra": "mean: 1.3730317044000002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.4548117153767692,
            "unit": "iter/sec",
            "range": "stddev: 0.05517899126807633",
            "extra": "mean: 289.45137460000296 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.9914726891943102,
            "unit": "iter/sec",
            "range": "stddev: 0.059653367018792716",
            "extra": "mean: 502.1409560000393 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.886799876141649,
            "unit": "iter/sec",
            "range": "stddev: 0.059629308366263185",
            "extra": "mean: 529.9979148000148 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.8925457927543463,
            "unit": "iter/sec",
            "range": "stddev: 0.06044457398764239",
            "extra": "mean: 528.3887997999955 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 23.831565075556014,
            "unit": "iter/sec",
            "range": "stddev: 0.001479273123760496",
            "extra": "mean: 41.96115516667002 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72e19f3eddd512a691e080a7d1bb1dcac5aa6a24",
          "message": "Add initial bigtable stub test (#1286)\n\n* Add initial bigtable stub test\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Fix kokoro test\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-01-28T19:19:27-08:00",
          "tree_id": "f355df19545ebad9758a80963c7dd67358466ff3",
          "url": "https://github.com/tensorflow/io/commit/72e19f3eddd512a691e080a7d1bb1dcac5aa6a24"
        },
        "date": 1611890912373,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3568.4460132729378,
            "unit": "iter/sec",
            "range": "stddev: 0.00006559857412388654",
            "extra": "mean: 280.2340279999953 usec\nrounds: 1250"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2838.4171823971965,
            "unit": "iter/sec",
            "range": "stddev: 0.00007950407315745216",
            "extra": "mean: 352.30902849715915 usec\nrounds: 1544"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 812.0527230439685,
            "unit": "iter/sec",
            "range": "stddev: 0.0002248084478735081",
            "extra": "mean: 1.2314471359094934 msec\nrounds: 802"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 467.61507378805146,
            "unit": "iter/sec",
            "range": "stddev: 0.00018552780711231985",
            "extra": "mean: 2.138511044777086 msec\nrounds: 469"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1282.8121307926435,
            "unit": "iter/sec",
            "range": "stddev: 0.00010456171500589705",
            "extra": "mean: 779.5373741766105 usec\nrounds: 1216"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 474.72117964673504,
            "unit": "iter/sec",
            "range": "stddev: 0.00019948172716175344",
            "extra": "mean: 2.10649965258376 msec\nrounds: 213"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 815.6200778133755,
            "unit": "iter/sec",
            "range": "stddev: 0.00015378152124271408",
            "extra": "mean: 1.2260610389593831 msec\nrounds: 616"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 2.969312281686005,
            "unit": "iter/sec",
            "range": "stddev: 0.03427301486136752",
            "extra": "mean: 336.7783194000026 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 24.976394559742523,
            "unit": "iter/sec",
            "range": "stddev: 0.0009032455134130853",
            "extra": "mean: 40.03780439999218 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7375296545204375,
            "unit": "iter/sec",
            "range": "stddev: 0.055496997507312976",
            "extra": "mean: 1.3558776842000042 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.746952326907724,
            "unit": "iter/sec",
            "range": "stddev: 0.05840400396166687",
            "extra": "mean: 1.3387735254000177 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.736551378463494,
            "unit": "iter/sec",
            "range": "stddev: 0.05668077282703914",
            "extra": "mean: 1.3576785398000084 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.3599264735749872,
            "unit": "iter/sec",
            "range": "stddev: 0.07898742155334561",
            "extra": "mean: 2.7783452272000204 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.2766007898309999,
            "unit": "iter/sec",
            "range": "stddev: 0.1616760684733711",
            "extra": "mean: 3.615318671399996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5457718446820642,
            "unit": "iter/sec",
            "range": "stddev: 0.013919849273023673",
            "extra": "mean: 1.8322674753999877 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 2.064631464514186,
            "unit": "iter/sec",
            "range": "stddev: 0.005489480662619648",
            "extra": "mean: 484.3479415999809 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.2350786660346884,
            "unit": "iter/sec",
            "range": "stddev: 0.07310921085137197",
            "extra": "mean: 809.6650257999954 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.189642460714893,
            "unit": "iter/sec",
            "range": "stddev: 0.07783193100511954",
            "extra": "mean: 840.5886920000057 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.197044057422753,
            "unit": "iter/sec",
            "range": "stddev: 0.07905619864837037",
            "extra": "mean: 835.3911401999767 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 19.496156613453216,
            "unit": "iter/sec",
            "range": "stddev: 0.0006327319428839682",
            "extra": "mean: 51.29216080003971 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72e19f3eddd512a691e080a7d1bb1dcac5aa6a24",
          "message": "Add initial bigtable stub test (#1286)\n\n* Add initial bigtable stub test\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Fix kokoro test\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-01-28T19:19:27-08:00",
          "tree_id": "f355df19545ebad9758a80963c7dd67358466ff3",
          "url": "https://github.com/tensorflow/io/commit/72e19f3eddd512a691e080a7d1bb1dcac5aa6a24"
        },
        "date": 1611890925047,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5601.022786264571,
            "unit": "iter/sec",
            "range": "stddev: 0.000011783636140818022",
            "extra": "mean: 178.538820169114 usec\nrounds: 1418"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3914.5509112150244,
            "unit": "iter/sec",
            "range": "stddev: 0.0000116890943726943",
            "extra": "mean: 255.45714506740524 usec\nrounds: 2585"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 915.0371403879458,
            "unit": "iter/sec",
            "range": "stddev: 0.000040283953296992696",
            "extra": "mean: 1.092851815365694 msec\nrounds: 872"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 467.2455299359371,
            "unit": "iter/sec",
            "range": "stddev: 0.00006393190182152445",
            "extra": "mean: 2.1402023902446055 msec\nrounds: 451"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1512.9440216449996,
            "unit": "iter/sec",
            "range": "stddev: 0.00004501621815690067",
            "extra": "mean: 660.9629871914997 usec\nrounds: 1015"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 669.2522905071471,
            "unit": "iter/sec",
            "range": "stddev: 0.00003495665178305611",
            "extra": "mean: 1.494204822582256 msec\nrounds: 248"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1127.5416522036746,
            "unit": "iter/sec",
            "range": "stddev: 0.00003042271912097599",
            "extra": "mean: 886.8851966981385 usec\nrounds: 727"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.8051264285752606,
            "unit": "iter/sec",
            "range": "stddev: 0.0347262571948223",
            "extra": "mean: 262.80335719999357 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 29.812551495598395,
            "unit": "iter/sec",
            "range": "stddev: 0.0014091929310386156",
            "extra": "mean: 33.542918999993766 msec\nrounds: 12"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.3359884393500214,
            "unit": "iter/sec",
            "range": "stddev: 0.04480323279163516",
            "extra": "mean: 748.5094709999998 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.322827083298136,
            "unit": "iter/sec",
            "range": "stddev: 0.05076048305587164",
            "extra": "mean: 755.956702599974 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.2739110541110652,
            "unit": "iter/sec",
            "range": "stddev: 0.05483358759747336",
            "extra": "mean: 784.9841609999999 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5368634617606144,
            "unit": "iter/sec",
            "range": "stddev: 0.04899407773465712",
            "extra": "mean: 1.8626709977999893 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.4149145456764406,
            "unit": "iter/sec",
            "range": "stddev: 0.05247472705914677",
            "extra": "mean: 2.4101348347999876 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7379231787368316,
            "unit": "iter/sec",
            "range": "stddev: 0.012788732253329362",
            "extra": "mean: 1.3551546133999863 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.5059831232278746,
            "unit": "iter/sec",
            "range": "stddev: 0.05729232119881468",
            "extra": "mean: 285.2267010000105 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.028424467851055,
            "unit": "iter/sec",
            "range": "stddev: 0.06307668260038295",
            "extra": "mean: 492.9934615999855 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.9482330757870587,
            "unit": "iter/sec",
            "range": "stddev: 0.07008688601928074",
            "extra": "mean: 513.2856085999947 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.9203861031817773,
            "unit": "iter/sec",
            "range": "stddev: 0.06464549807266722",
            "extra": "mean: 520.7286172000295 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 23.907306155412005,
            "unit": "iter/sec",
            "range": "stddev: 0.0011422963515584938",
            "extra": "mean: 41.828217428571534 msec\nrounds: 7"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "10176247e2bf8d495eedd209fae92751c7cfef2a",
          "message": "Update azure lite v0.3.0 (#1288)\n\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-01-29T20:05:10-08:00",
          "tree_id": "fe594a63db921cb0a7b9e706173bffc6d1549bf2",
          "url": "https://github.com/tensorflow/io/commit/10176247e2bf8d495eedd209fae92751c7cfef2a"
        },
        "date": 1611979933420,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5459.574915040278,
            "unit": "iter/sec",
            "range": "stddev: 0.000010809598122440002",
            "extra": "mean: 183.16444330586174 usec\nrounds: 1464"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3897.232614795533,
            "unit": "iter/sec",
            "range": "stddev: 0.00001243165921916681",
            "extra": "mean: 256.59233072298014 usec\nrounds: 2809"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 923.2181612526241,
            "unit": "iter/sec",
            "range": "stddev: 0.000038896858588714856",
            "extra": "mean: 1.0831675999995474 msec\nrounds: 820"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 470.4984900137082,
            "unit": "iter/sec",
            "range": "stddev: 0.00006639569444475718",
            "extra": "mean: 2.1254053333324503 msec\nrounds: 483"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1535.168210987007,
            "unit": "iter/sec",
            "range": "stddev: 0.000047675454985824834",
            "extra": "mean: 651.3944158321707 usec\nrounds: 998"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 674.748631647858,
            "unit": "iter/sec",
            "range": "stddev: 0.00005314150265847535",
            "extra": "mean: 1.482033387096791 msec\nrounds: 248"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1120.3934844400026,
            "unit": "iter/sec",
            "range": "stddev: 0.00006174815183046642",
            "extra": "mean: 892.543569636896 usec\nrounds: 718"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.754436319860166,
            "unit": "iter/sec",
            "range": "stddev: 0.041947105872326695",
            "extra": "mean: 266.35156779999534 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 29.502451138739815,
            "unit": "iter/sec",
            "range": "stddev: 0.001195956274296324",
            "extra": "mean: 33.895488727270354 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.353852379200983,
            "unit": "iter/sec",
            "range": "stddev: 0.04811977210105411",
            "extra": "mean: 738.6329671999988 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.3370372659893281,
            "unit": "iter/sec",
            "range": "stddev: 0.03969146133195405",
            "extra": "mean: 747.9223095999942 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.311378807051754,
            "unit": "iter/sec",
            "range": "stddev: 0.04762951857022405",
            "extra": "mean: 762.5561695999977 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5260913946589376,
            "unit": "iter/sec",
            "range": "stddev: 0.05912902799165893",
            "extra": "mean: 1.9008104107999997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.4038180769157628,
            "unit": "iter/sec",
            "range": "stddev: 0.05652084170298928",
            "extra": "mean: 2.4763626423999883 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7491524423389454,
            "unit": "iter/sec",
            "range": "stddev: 0.012069516911466509",
            "extra": "mean: 1.3348418071999846 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.593797845241587,
            "unit": "iter/sec",
            "range": "stddev: 0.05211033153081381",
            "extra": "mean: 278.2571649999909 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.104072670034359,
            "unit": "iter/sec",
            "range": "stddev: 0.05771522129136032",
            "extra": "mean: 475.2687557999934 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.0161044520426064,
            "unit": "iter/sec",
            "range": "stddev: 0.06111696013600219",
            "extra": "mean: 496.0060472000123 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.9989128544640666,
            "unit": "iter/sec",
            "range": "stddev: 0.06010811651971742",
            "extra": "mean: 500.2719342000091 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 24.84351090228703,
            "unit": "iter/sec",
            "range": "stddev: 0.0017309850197645832",
            "extra": "mean: 40.251959714274626 msec\nrounds: 7"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "10176247e2bf8d495eedd209fae92751c7cfef2a",
          "message": "Update azure lite v0.3.0 (#1288)\n\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-01-29T20:05:10-08:00",
          "tree_id": "fe594a63db921cb0a7b9e706173bffc6d1549bf2",
          "url": "https://github.com/tensorflow/io/commit/10176247e2bf8d495eedd209fae92751c7cfef2a"
        },
        "date": 1611980002158,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5566.663504689343,
            "unit": "iter/sec",
            "range": "stddev: 0.000011747940714223063",
            "extra": "mean: 179.64082060243132 usec\nrounds: 1427"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4002.931688271047,
            "unit": "iter/sec",
            "range": "stddev: 0.000013290677497114943",
            "extra": "mean: 249.8169036783942 usec\nrounds: 2855"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 950.7929949139811,
            "unit": "iter/sec",
            "range": "stddev: 0.00004595021675924657",
            "extra": "mean: 1.0517536470601265 msec\nrounds: 833"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 497.28236052857847,
            "unit": "iter/sec",
            "range": "stddev: 0.00007221045589844877",
            "extra": "mean: 2.010929965295905 msec\nrounds: 461"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1484.8910544908927,
            "unit": "iter/sec",
            "range": "stddev: 0.00004421384273978502",
            "extra": "mean: 673.4500803783604 usec\nrounds: 1269"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 685.1507780841627,
            "unit": "iter/sec",
            "range": "stddev: 0.00005122351752031172",
            "extra": "mean: 1.4595327510190201 msec\nrounds: 245"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1141.237657568669,
            "unit": "iter/sec",
            "range": "stddev: 0.00003146281024720099",
            "extra": "mean: 876.2416779432548 usec\nrounds: 739"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.7177877079985744,
            "unit": "iter/sec",
            "range": "stddev: 0.037917730558577896",
            "extra": "mean: 268.9771656000062 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 29.427759086363203,
            "unit": "iter/sec",
            "range": "stddev: 0.0007504142610136071",
            "extra": "mean: 33.98152054545666 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.371616919418574,
            "unit": "iter/sec",
            "range": "stddev: 0.04540726168734373",
            "extra": "mean: 729.0665387999866 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.364157260017293,
            "unit": "iter/sec",
            "range": "stddev: 0.05985544195436815",
            "extra": "mean: 733.0533137999964 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.3718663467420862,
            "unit": "iter/sec",
            "range": "stddev: 0.049122053591255474",
            "extra": "mean: 728.9339828000038 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5195985001367753,
            "unit": "iter/sec",
            "range": "stddev: 0.06750240426534167",
            "extra": "mean: 1.9245629072000157 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.4131963096788694,
            "unit": "iter/sec",
            "range": "stddev: 0.06959974509554284",
            "extra": "mean: 2.420157142200003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7711477346570779,
            "unit": "iter/sec",
            "range": "stddev: 0.007168366610577747",
            "extra": "mean: 1.2967683818000069 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.7073699355640737,
            "unit": "iter/sec",
            "range": "stddev: 0.059211772607479965",
            "extra": "mean: 269.73299599999336 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.137909764639722,
            "unit": "iter/sec",
            "range": "stddev: 0.0563541092079292",
            "extra": "mean: 467.7465889999894 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.0545863630857673,
            "unit": "iter/sec",
            "range": "stddev: 0.057048660555140185",
            "extra": "mean: 486.7159726000068 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.0148725260653535,
            "unit": "iter/sec",
            "range": "stddev: 0.057000789004091106",
            "extra": "mean: 496.3093133999905 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 25.24875879717444,
            "unit": "iter/sec",
            "range": "stddev: 0.000857608432263729",
            "extra": "mean: 39.605907285704234 msec\nrounds: 7"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e986ea51d0f15c1349a666c9cbda93b8a7a4ce1b",
          "message": "Add reference to github-pages benchmarks in README (#1289)\n\n* add reference to github-pages benchmarks\r\n\r\n* minor grammar change\r\n\r\n* Update README.md\r\n\r\nCo-authored-by: Yuan Tang <terrytangyuan@gmail.com>\r\n\r\nCo-authored-by: Yuan Tang <terrytangyuan@gmail.com>",
          "timestamp": "2021-01-30T19:38:29-08:00",
          "tree_id": "58cd5ef2e9be619891237e0507ef4e28ad61228f",
          "url": "https://github.com/tensorflow/io/commit/e986ea51d0f15c1349a666c9cbda93b8a7a4ce1b"
        },
        "date": 1612064675062,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 6155.399816406661,
            "unit": "iter/sec",
            "range": "stddev: 0.000008030264333687106",
            "extra": "mean: 162.45898395333973 usec\nrounds: 1371"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4411.697326207488,
            "unit": "iter/sec",
            "range": "stddev: 0.000012241487855060303",
            "extra": "mean: 226.67012853750083 usec\nrounds: 2933"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1061.3394818844165,
            "unit": "iter/sec",
            "range": "stddev: 0.000009284744513801829",
            "extra": "mean: 942.2055968600097 usec\nrounds: 955"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 544.6244610282749,
            "unit": "iter/sec",
            "range": "stddev: 0.00002413789401967814",
            "extra": "mean: 1.8361275916839213 msec\nrounds: 529"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1789.3841064680955,
            "unit": "iter/sec",
            "range": "stddev: 0.000008703441818860578",
            "extra": "mean: 558.8515044843056 usec\nrounds: 1338"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 766.3164613317321,
            "unit": "iter/sec",
            "range": "stddev: 0.00001715239725027263",
            "extra": "mean: 1.304943910851353 msec\nrounds: 258"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1277.0492820646937,
            "unit": "iter/sec",
            "range": "stddev: 0.000013460724215509775",
            "extra": "mean: 783.0551365905245 usec\nrounds: 798"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 4.135820076547112,
            "unit": "iter/sec",
            "range": "stddev: 0.04485762323131705",
            "extra": "mean: 241.79001540001082 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 33.29719059897788,
            "unit": "iter/sec",
            "range": "stddev: 0.0007131215895210038",
            "extra": "mean: 30.032563769229732 msec\nrounds: 13"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.446556675610164,
            "unit": "iter/sec",
            "range": "stddev: 0.05413895821191851",
            "extra": "mean: 691.2967993999928 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.4524927482716248,
            "unit": "iter/sec",
            "range": "stddev: 0.053731277771659675",
            "extra": "mean: 688.4715956000036 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.4206576869923062,
            "unit": "iter/sec",
            "range": "stddev: 0.06138429837336318",
            "extra": "mean: 703.8993342000026 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.6004593566198084,
            "unit": "iter/sec",
            "range": "stddev: 0.11117106219739988",
            "extra": "mean: 1.6653916521999803 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.4499959656331708,
            "unit": "iter/sec",
            "range": "stddev: 0.08571183830811152",
            "extra": "mean: 2.2222421451999934 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7856282965535926,
            "unit": "iter/sec",
            "range": "stddev: 0.005396169820790505",
            "extra": "mean: 1.2728665761999878 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.8637272068881425,
            "unit": "iter/sec",
            "range": "stddev: 0.05783812439530789",
            "extra": "mean: 258.8174439999875 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.259271602530232,
            "unit": "iter/sec",
            "range": "stddev: 0.0690284205479992",
            "extra": "mean: 442.62053260000584 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.161731751788611,
            "unit": "iter/sec",
            "range": "stddev: 0.07693098994723048",
            "extra": "mean: 462.5920858000086 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.201337681585603,
            "unit": "iter/sec",
            "range": "stddev: 0.06494058293663797",
            "extra": "mean: 454.26924200003214 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 26.035625006897938,
            "unit": "iter/sec",
            "range": "stddev: 0.0036296470922999",
            "extra": "mean: 38.408910857145074 msec\nrounds: 7"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e986ea51d0f15c1349a666c9cbda93b8a7a4ce1b",
          "message": "Add reference to github-pages benchmarks in README (#1289)\n\n* add reference to github-pages benchmarks\r\n\r\n* minor grammar change\r\n\r\n* Update README.md\r\n\r\nCo-authored-by: Yuan Tang <terrytangyuan@gmail.com>\r\n\r\nCo-authored-by: Yuan Tang <terrytangyuan@gmail.com>",
          "timestamp": "2021-01-30T19:38:29-08:00",
          "tree_id": "58cd5ef2e9be619891237e0507ef4e28ad61228f",
          "url": "https://github.com/tensorflow/io/commit/e986ea51d0f15c1349a666c9cbda93b8a7a4ce1b"
        },
        "date": 1612064870999,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3765.080810939151,
            "unit": "iter/sec",
            "range": "stddev: 0.0000643676263586285",
            "extra": "mean: 265.5985489327553 usec\nrounds: 1124"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3294.42749173218,
            "unit": "iter/sec",
            "range": "stddev: 0.000060038707631897235",
            "extra": "mean: 303.5428773313839 usec\nrounds: 2038"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 904.4149522791947,
            "unit": "iter/sec",
            "range": "stddev: 0.0002125392655769146",
            "extra": "mean: 1.105687159947902 msec\nrounds: 794"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 527.4893515227171,
            "unit": "iter/sec",
            "range": "stddev: 0.00033734763769984345",
            "extra": "mean: 1.895772866529484 msec\nrounds: 487"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1485.2139269349675,
            "unit": "iter/sec",
            "range": "stddev: 0.0001136763232400258",
            "extra": "mean: 673.3036782544166 usec\nrounds: 1467"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 495.6775067816054,
            "unit": "iter/sec",
            "range": "stddev: 0.0003950658429448316",
            "extra": "mean: 2.0174407479026444 msec\nrounds: 238"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 848.6244145341042,
            "unit": "iter/sec",
            "range": "stddev: 0.00020919079150133354",
            "extra": "mean: 1.178377598939339 msec\nrounds: 566"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 2.8466414682608154,
            "unit": "iter/sec",
            "range": "stddev: 0.047150905197581944",
            "extra": "mean: 351.2911658000121 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 25.99985091685626,
            "unit": "iter/sec",
            "range": "stddev: 0.0017528662474910832",
            "extra": "mean: 38.461758999997905 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.8791682481650526,
            "unit": "iter/sec",
            "range": "stddev: 0.03958715086174467",
            "extra": "mean: 1.1374387122000145 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.8640505122215288,
            "unit": "iter/sec",
            "range": "stddev: 0.04112618231719883",
            "extra": "mean: 1.1573397455999839 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.8330698391747171,
            "unit": "iter/sec",
            "range": "stddev: 0.04679611992113174",
            "extra": "mean: 1.2003795515999627 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.39097463141610006,
            "unit": "iter/sec",
            "range": "stddev: 0.05594685745619882",
            "extra": "mean: 2.557710704600004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.2991131095000184,
            "unit": "iter/sec",
            "range": "stddev: 0.03796748317243593",
            "extra": "mean: 3.34321689100002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6151520554276383,
            "unit": "iter/sec",
            "range": "stddev: 0.04633898392677014",
            "extra": "mean: 1.6256143357999917 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 2.3721686786218865,
            "unit": "iter/sec",
            "range": "stddev: 0.04313404689182345",
            "extra": "mean: 421.5551823999931 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.520975755348354,
            "unit": "iter/sec",
            "range": "stddev: 0.047454811880265665",
            "extra": "mean: 657.4726759999976 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.5324714029251347,
            "unit": "iter/sec",
            "range": "stddev: 0.05324709309135856",
            "extra": "mean: 652.5407247999738 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.499921891417451,
            "unit": "iter/sec",
            "range": "stddev: 0.06492318643940194",
            "extra": "mean: 666.7013834000272 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 20.900577270659326,
            "unit": "iter/sec",
            "range": "stddev: 0.0035173161145262725",
            "extra": "mean: 47.845568428572605 msec\nrounds: 7"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rencheng311@gmail.com",
            "name": "Cheng Ren",
            "username": "burgerkingeater"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b1b49d9bf941ba913eb3763deffa08064448f4c",
          "message": "Update _toc.yaml (#1290)",
          "timestamp": "2021-01-31T12:58:07+05:30",
          "tree_id": "38d7b7fc759a362086d512a98395f3a701368bc2",
          "url": "https://github.com/tensorflow/io/commit/4b1b49d9bf941ba913eb3763deffa08064448f4c"
        },
        "date": 1612078427189,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 6147.735338911903,
            "unit": "iter/sec",
            "range": "stddev: 0.00000827996985843615",
            "extra": "mean: 162.6615241014899 usec\nrounds: 1307"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4406.336938823977,
            "unit": "iter/sec",
            "range": "stddev: 0.000007527727488975422",
            "extra": "mean: 226.94587678691985 usec\nrounds: 2938"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1080.0734929807695,
            "unit": "iter/sec",
            "range": "stddev: 0.0000089409107987159",
            "extra": "mean: 925.8629218278619 usec\nrounds: 985"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 573.4418513382473,
            "unit": "iter/sec",
            "range": "stddev: 0.000011632409773640668",
            "extra": "mean: 1.7438559771427382 msec\nrounds: 525"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1675.1157556714368,
            "unit": "iter/sec",
            "range": "stddev: 0.000021169203009063366",
            "extra": "mean: 596.9736697982223 usec\nrounds: 1384"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 759.7387954650064,
            "unit": "iter/sec",
            "range": "stddev: 0.000027215968196853917",
            "extra": "mean: 1.3162418530804907 msec\nrounds: 211"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1262.5299680353332,
            "unit": "iter/sec",
            "range": "stddev: 0.000018137233627476336",
            "extra": "mean: 792.0604067372237 usec\nrounds: 772"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 4.071679822284544,
            "unit": "iter/sec",
            "range": "stddev: 0.043942481673293815",
            "extra": "mean: 245.59887899999922 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 31.89401060903366,
            "unit": "iter/sec",
            "range": "stddev: 0.0010032967244180103",
            "extra": "mean: 31.353849230763092 msec\nrounds: 13"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.4391881418569374,
            "unit": "iter/sec",
            "range": "stddev: 0.0573072611188428",
            "extra": "mean: 694.8361864000162 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.44179619126374,
            "unit": "iter/sec",
            "range": "stddev: 0.06104261272509333",
            "extra": "mean: 693.579304800005 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.417716458105676,
            "unit": "iter/sec",
            "range": "stddev: 0.06378671186508632",
            "extra": "mean: 705.3596608000021 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.586961194578029,
            "unit": "iter/sec",
            "range": "stddev: 0.07079771776647156",
            "extra": "mean: 1.7036901404000104 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.4571144495956045,
            "unit": "iter/sec",
            "range": "stddev: 0.07318328981733815",
            "extra": "mean: 2.1876359429999868 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7732317120710703,
            "unit": "iter/sec",
            "range": "stddev: 0.10421930774364072",
            "extra": "mean: 1.293273393200002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.8540436070542117,
            "unit": "iter/sec",
            "range": "stddev: 0.06372795785979307",
            "extra": "mean: 259.4677440000055 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.2445677440573055,
            "unit": "iter/sec",
            "range": "stddev: 0.07819814139129426",
            "extra": "mean: 445.52007959999855 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.219543358669172,
            "unit": "iter/sec",
            "range": "stddev: 0.07653932054227132",
            "extra": "mean: 450.54312460000574 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.1839330584367196,
            "unit": "iter/sec",
            "range": "stddev: 0.07535848402142013",
            "extra": "mean: 457.8894926000203 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 27.06468937097817,
            "unit": "iter/sec",
            "range": "stddev: 0.001376389206512443",
            "extra": "mean: 36.9485120000052 msec\nrounds: 7"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rencheng311@gmail.com",
            "name": "Cheng Ren",
            "username": "burgerkingeater"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b1b49d9bf941ba913eb3763deffa08064448f4c",
          "message": "Update _toc.yaml (#1290)",
          "timestamp": "2021-01-31T12:58:07+05:30",
          "tree_id": "38d7b7fc759a362086d512a98395f3a701368bc2",
          "url": "https://github.com/tensorflow/io/commit/4b1b49d9bf941ba913eb3763deffa08064448f4c"
        },
        "date": 1612078622035,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5462.1320724317975,
            "unit": "iter/sec",
            "range": "stddev: 0.000008544094530406982",
            "extra": "mean: 183.07869285093827 usec\nrounds: 1273"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3876.036600350545,
            "unit": "iter/sec",
            "range": "stddev: 0.000008075969629688705",
            "extra": "mean: 257.9954998127626 usec\nrounds: 2669"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 889.8930413200386,
            "unit": "iter/sec",
            "range": "stddev: 0.000010656835405565606",
            "extra": "mean: 1.1237305536366846 msec\nrounds: 811"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 457.3902026866587,
            "unit": "iter/sec",
            "range": "stddev: 0.000023345229246685638",
            "extra": "mean: 2.1863170529803924 msec\nrounds: 453"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1426.910099415649,
            "unit": "iter/sec",
            "range": "stddev: 0.00004717849335153719",
            "extra": "mean: 700.814999073538 usec\nrounds: 1079"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 667.4677094973856,
            "unit": "iter/sec",
            "range": "stddev: 0.00002156242813397414",
            "extra": "mean: 1.498199816666812 msec\nrounds: 240"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1111.976794934054,
            "unit": "iter/sec",
            "range": "stddev: 0.00022617129860716162",
            "extra": "mean: 899.2993419968852 usec\nrounds: 731"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.3936980012288145,
            "unit": "iter/sec",
            "range": "stddev: 0.041751419278574564",
            "extra": "mean: 294.6638150000126 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 26.088602619751786,
            "unit": "iter/sec",
            "range": "stddev: 0.002577800174717736",
            "extra": "mean: 38.33091463637443 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.181108638727638,
            "unit": "iter/sec",
            "range": "stddev: 0.060761787972385614",
            "extra": "mean: 846.6621673999953 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.2181190053792064,
            "unit": "iter/sec",
            "range": "stddev: 0.0721444964715046",
            "extra": "mean: 820.9378521999952 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.2685963356061203,
            "unit": "iter/sec",
            "range": "stddev: 0.05892437911663951",
            "extra": "mean: 788.2728114000201 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.44455576093036936,
            "unit": "iter/sec",
            "range": "stddev: 0.10876951720997156",
            "extra": "mean: 2.249436601399998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3457037467232049,
            "unit": "iter/sec",
            "range": "stddev: 0.08290763446176255",
            "extra": "mean: 2.892650165000009 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6893620480642134,
            "unit": "iter/sec",
            "range": "stddev: 0.03464468928991078",
            "extra": "mean: 1.4506165559999773 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.471379879840821,
            "unit": "iter/sec",
            "range": "stddev: 0.05913080015038142",
            "extra": "mean: 288.0698842000129 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.0245900241846,
            "unit": "iter/sec",
            "range": "stddev: 0.06596504379367006",
            "extra": "mean: 493.9271596000026 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.861900619140356,
            "unit": "iter/sec",
            "range": "stddev: 0.06591087722703458",
            "extra": "mean: 537.0855940000183 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.819327139526767,
            "unit": "iter/sec",
            "range": "stddev: 0.07218104403015878",
            "extra": "mean: 549.6537583999952 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 21.45228524438278,
            "unit": "iter/sec",
            "range": "stddev: 0.002493608905338508",
            "extra": "mean: 46.61508033331074 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markdaoust@google.com",
            "name": "Mark Daoust",
            "username": "MarkDaoust"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "82426ac4aa8c7a6e39dbe9cf1aa34b34e20a4a8f",
          "message": "Clear outputs (#1292)",
          "timestamp": "2021-02-02T07:13:25-08:00",
          "tree_id": "215bbdce4e79164f5b7d0c2d403efe5ae4fc52bd",
          "url": "https://github.com/tensorflow/io/commit/82426ac4aa8c7a6e39dbe9cf1aa34b34e20a4a8f"
        },
        "date": 1612279288636,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 6232.890259525138,
            "unit": "iter/sec",
            "range": "stddev: 0.00000787525998868183",
            "extra": "mean: 160.43921172393405 usec\nrounds: 1450"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4378.483988581106,
            "unit": "iter/sec",
            "range": "stddev: 0.000006552433168457496",
            "extra": "mean: 228.38955277853157 usec\nrounds: 3041"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1064.9053966201407,
            "unit": "iter/sec",
            "range": "stddev: 0.000008544301483615687",
            "extra": "mean: 939.0505515080108 usec\nrounds: 961"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 533.3512459302233,
            "unit": "iter/sec",
            "range": "stddev: 0.00005417867356550949",
            "extra": "mean: 1.8749370281415392 msec\nrounds: 533"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1752.9598985682273,
            "unit": "iter/sec",
            "range": "stddev: 0.000009891209765438105",
            "extra": "mean: 570.4637058821337 usec\nrounds: 1377"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 773.7472833531333,
            "unit": "iter/sec",
            "range": "stddev: 0.00001644250568863099",
            "extra": "mean: 1.2924116459141175 msec\nrounds: 257"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1288.1382581808089,
            "unit": "iter/sec",
            "range": "stddev: 0.000011766014350756813",
            "extra": "mean: 776.3141833953943 usec\nrounds: 807"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 4.08911894860922,
            "unit": "iter/sec",
            "range": "stddev: 0.03782659444347107",
            "extra": "mean: 244.55145780000294 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 33.82407433901853,
            "unit": "iter/sec",
            "range": "stddev: 0.000566982804341273",
            "extra": "mean: 29.564741076932513 msec\nrounds: 13"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.4825839669405572,
            "unit": "iter/sec",
            "range": "stddev: 0.053504884216975544",
            "extra": "mean: 674.4980536000185 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.4820206665078748,
            "unit": "iter/sec",
            "range": "stddev: 0.053438867322953026",
            "extra": "mean: 674.7544231999996 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.4626497502353528,
            "unit": "iter/sec",
            "range": "stddev: 0.05268585307897473",
            "extra": "mean: 683.6906784000007 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.6054854625387799,
            "unit": "iter/sec",
            "range": "stddev: 0.06354545186819863",
            "extra": "mean: 1.6515673156000048 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.46825656128859844,
            "unit": "iter/sec",
            "range": "stddev: 0.0628518818537567",
            "extra": "mean: 2.135581394199994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.8048912713261992,
            "unit": "iter/sec",
            "range": "stddev: 0.09510596446002396",
            "extra": "mean: 1.2424038322000002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.9857938781005258,
            "unit": "iter/sec",
            "range": "stddev: 0.0555222622476894",
            "extra": "mean: 250.8910472000025 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.3094623087405197,
            "unit": "iter/sec",
            "range": "stddev: 0.06570941535436534",
            "extra": "mean: 433.00122119999287 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.2615403587760037,
            "unit": "iter/sec",
            "range": "stddev: 0.06478647376327305",
            "extra": "mean: 442.1764997999958 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.2453144168024513,
            "unit": "iter/sec",
            "range": "stddev: 0.06208963799279979",
            "extra": "mean: 445.3719232000026 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 27.567226521589916,
            "unit": "iter/sec",
            "range": "stddev: 0.0008643698340873991",
            "extra": "mean: 36.27495857143361 msec\nrounds: 7"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markdaoust@google.com",
            "name": "Mark Daoust",
            "username": "MarkDaoust"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "82426ac4aa8c7a6e39dbe9cf1aa34b34e20a4a8f",
          "message": "Clear outputs (#1292)",
          "timestamp": "2021-02-02T07:13:25-08:00",
          "tree_id": "215bbdce4e79164f5b7d0c2d403efe5ae4fc52bd",
          "url": "https://github.com/tensorflow/io/commit/82426ac4aa8c7a6e39dbe9cf1aa34b34e20a4a8f"
        },
        "date": 1612279365517,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3652.393887095069,
            "unit": "iter/sec",
            "range": "stddev: 0.00005488395997904587",
            "extra": "mean: 273.79303298400544 usec\nrounds: 1243"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2888.4881341306527,
            "unit": "iter/sec",
            "range": "stddev: 0.00009043668244235465",
            "extra": "mean: 346.2018722472508 usec\nrounds: 2043"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 812.8042063475442,
            "unit": "iter/sec",
            "range": "stddev: 0.00021817647754459577",
            "extra": "mean: 1.230308593620163 msec\nrounds: 721"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 473.94565982160276,
            "unit": "iter/sec",
            "range": "stddev: 0.00020606070389624532",
            "extra": "mean: 2.10994652926331 msec\nrounds: 393"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1346.237614277085,
            "unit": "iter/sec",
            "range": "stddev: 0.0001545936883926749",
            "extra": "mean: 742.8109194059247 usec\nrounds: 943"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 489.765392190804,
            "unit": "iter/sec",
            "range": "stddev: 0.00022518083421740664",
            "extra": "mean: 2.041793919996735 msec\nrounds: 200"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 815.6670079871092,
            "unit": "iter/sec",
            "range": "stddev: 0.00018988714613731765",
            "extra": "mean: 1.2259904963764379 msec\nrounds: 552"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 2.928104615827692,
            "unit": "iter/sec",
            "range": "stddev: 0.027423903725480425",
            "extra": "mean: 341.5178523999998 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 25.55910194721059,
            "unit": "iter/sec",
            "range": "stddev: 0.001040437590974729",
            "extra": "mean: 39.12500533334019 msec\nrounds: 9"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7489291478145552,
            "unit": "iter/sec",
            "range": "stddev: 0.06269066310720588",
            "extra": "mean: 1.3352397925999981 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.7486195323318121,
            "unit": "iter/sec",
            "range": "stddev: 0.05843533029404588",
            "extra": "mean: 1.335792023600004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7506638241053429,
            "unit": "iter/sec",
            "range": "stddev: 0.05597830514140231",
            "extra": "mean: 1.3321542452000017 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.3573931054035298,
            "unit": "iter/sec",
            "range": "stddev: 0.086843942180977",
            "extra": "mean: 2.798039427399999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.27917183665944817,
            "unit": "iter/sec",
            "range": "stddev: 0.055056719450790687",
            "extra": "mean: 3.5820232153999996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5693706271068296,
            "unit": "iter/sec",
            "range": "stddev: 0.06598624061990027",
            "extra": "mean: 1.7563252341999942 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 2.18946508911731,
            "unit": "iter/sec",
            "range": "stddev: 0.00580321670927837",
            "extra": "mean: 456.73256219999985 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.2406212815012736,
            "unit": "iter/sec",
            "range": "stddev: 0.07339713727793946",
            "extra": "mean: 806.0477560000436 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.3133924836677247,
            "unit": "iter/sec",
            "range": "stddev: 0.05283337249764466",
            "extra": "mean: 761.3870282000107 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.2828314662691576,
            "unit": "iter/sec",
            "range": "stddev: 0.06494492354449115",
            "extra": "mean: 779.5256246000008 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 20.93534341103102,
            "unit": "iter/sec",
            "range": "stddev: 0.0012516528538411115",
            "extra": "mean: 47.76611399997819 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9c9ac76b72ef3874f374d330f57f94704631c30f",
          "message": "fix kafka online-learning section in tutorial notebook (#1274)\n\n* kafka notebook fix for colab env\r\n\r\n* change timeout from 30 to 20 seconds\r\n\r\n* reduce stream_timeout",
          "timestamp": "2021-02-02T11:30:47-08:00",
          "tree_id": "876ba662f5cb4651917cca09961171647d096a6b",
          "url": "https://github.com/tensorflow/io/commit/9c9ac76b72ef3874f374d330f57f94704631c30f"
        },
        "date": 1612294648575,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 6237.138938476033,
            "unit": "iter/sec",
            "range": "stddev: 0.000008232174429251113",
            "extra": "mean: 160.32992207871794 usec\nrounds: 1386"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4457.176944440556,
            "unit": "iter/sec",
            "range": "stddev: 0.00000694265464191724",
            "extra": "mean: 224.3572585215181 usec\nrounds: 2963"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1081.794917605779,
            "unit": "iter/sec",
            "range": "stddev: 0.000009235450673291556",
            "extra": "mean: 924.3896266523356 usec\nrounds: 983"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 566.7154805400563,
            "unit": "iter/sec",
            "range": "stddev: 0.00002596260562607608",
            "extra": "mean: 1.7645538799240874 msec\nrounds: 533"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1653.793990087576,
            "unit": "iter/sec",
            "range": "stddev: 0.00000969268843274976",
            "extra": "mean: 604.6702346203625 usec\nrounds: 1398"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 763.1985697889246,
            "unit": "iter/sec",
            "range": "stddev: 0.000015365051586147734",
            "extra": "mean: 1.310274992098802 msec\nrounds: 253"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1271.9267220481736,
            "unit": "iter/sec",
            "range": "stddev: 0.000014501633621612325",
            "extra": "mean: 786.2088142858638 usec\nrounds: 770"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.7401518323914056,
            "unit": "iter/sec",
            "range": "stddev: 0.051972998470709186",
            "extra": "mean: 267.36882479998485 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 32.56798169256493,
            "unit": "iter/sec",
            "range": "stddev: 0.0008271266957182534",
            "extra": "mean: 30.70500374999578 msec\nrounds: 12"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.451016070172445,
            "unit": "iter/sec",
            "range": "stddev: 0.057315081771577854",
            "extra": "mean: 689.1722432000051 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.454394272429204,
            "unit": "iter/sec",
            "range": "stddev: 0.05791163718160745",
            "extra": "mean: 687.5714646000006 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.4231440896759342,
            "unit": "iter/sec",
            "range": "stddev: 0.05658573857153337",
            "extra": "mean: 702.6695379999865 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5591213710474192,
            "unit": "iter/sec",
            "range": "stddev: 0.102755080927162",
            "extra": "mean: 1.7885204389999785 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.4421737979983533,
            "unit": "iter/sec",
            "range": "stddev: 0.06355692922653813",
            "extra": "mean: 2.2615541774000008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.778939224091631,
            "unit": "iter/sec",
            "range": "stddev: 0.006089256038674913",
            "extra": "mean: 1.2837972065999907 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.877441244665316,
            "unit": "iter/sec",
            "range": "stddev: 0.06200234188282071",
            "extra": "mean: 257.90203820001807 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.2576122090577297,
            "unit": "iter/sec",
            "range": "stddev: 0.07270732747032511",
            "extra": "mean: 442.94586820000177 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.179029447253552,
            "unit": "iter/sec",
            "range": "stddev: 0.06970602694299202",
            "extra": "mean: 458.9199110000095 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.208172274676024,
            "unit": "iter/sec",
            "range": "stddev: 0.06756286253786785",
            "extra": "mean: 452.8632170000037 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 27.182752608713223,
            "unit": "iter/sec",
            "range": "stddev: 0.0009200666430229761",
            "extra": "mean: 36.78803299999345 msec\nrounds: 7"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e11961d18793e0d2efbd3b8bb4c4e52f3d897e8",
          "message": "Only enable bazel caching writes for tensorflow/io github actions (#1293)\n\nThis PR updates so that only GitHub actions run on\r\ntensorflow/io repo will be enabled with bazel cache writes.\r\n\r\nWithout the updates, a focked repo actions will cause error.\r\n\r\nNote once bazel cache read-permissions are enabled from gcs\r\nforked repo will be able to access bazel cache (read-only).\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-02T11:32:07-08:00",
          "tree_id": "2574efb48b8e713170fc87beff9c8aacbb0d64f2",
          "url": "https://github.com/tensorflow/io/commit/8e11961d18793e0d2efbd3b8bb4c4e52f3d897e8"
        },
        "date": 1612294688780,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5347.220141074815,
            "unit": "iter/sec",
            "range": "stddev: 0.000009373987292409997",
            "extra": "mean: 187.0130597987678 usec\nrounds: 1388"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3830.4642546717105,
            "unit": "iter/sec",
            "range": "stddev: 0.000008466266198849725",
            "extra": "mean: 261.0649606716418 usec\nrounds: 2619"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 888.7512506804377,
            "unit": "iter/sec",
            "range": "stddev: 0.000011613186490963386",
            "extra": "mean: 1.1251742253351418 msec\nrounds: 821"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 456.4531687448413,
            "unit": "iter/sec",
            "range": "stddev: 0.00002278462911998441",
            "extra": "mean: 2.190805253362154 msec\nrounds: 446"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1347.2580077040532,
            "unit": "iter/sec",
            "range": "stddev: 0.00004264934667146794",
            "extra": "mean: 742.2483253257204 usec\nrounds: 999"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 662.0564287431224,
            "unit": "iter/sec",
            "range": "stddev: 0.000020385408128721403",
            "extra": "mean: 1.510445268084542 msec\nrounds: 235"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1109.4304834057257,
            "unit": "iter/sec",
            "range": "stddev: 0.00001581212660160405",
            "extra": "mean: 901.3633706279672 usec\nrounds: 715"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.471426219368667,
            "unit": "iter/sec",
            "range": "stddev: 0.03841105488234987",
            "extra": "mean: 288.0660388000024 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 27.401928156609298,
            "unit": "iter/sec",
            "range": "stddev: 0.0006929496181516494",
            "extra": "mean: 36.49378227271944 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2561196929866048,
            "unit": "iter/sec",
            "range": "stddev: 0.05696018537506556",
            "extra": "mean: 796.102477799991 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.2555601467232518,
            "unit": "iter/sec",
            "range": "stddev: 0.058938358267622934",
            "extra": "mean: 796.4572646000192 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.2224183366975478,
            "unit": "iter/sec",
            "range": "stddev: 0.06609125172405349",
            "extra": "mean: 818.0505559999801 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.49527151177868217,
            "unit": "iter/sec",
            "range": "stddev: 0.05668895117866258",
            "extra": "mean: 2.0190945293999905 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.37686194710560605,
            "unit": "iter/sec",
            "range": "stddev: 0.035889151939831894",
            "extra": "mean: 2.6534915707999973 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6878433160807863,
            "unit": "iter/sec",
            "range": "stddev: 0.009945623822191014",
            "extra": "mean: 1.4538194623999972 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.364302353284022,
            "unit": "iter/sec",
            "range": "stddev: 0.059589778159530385",
            "extra": "mean: 297.23844500000496 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.9566115311811874,
            "unit": "iter/sec",
            "range": "stddev: 0.06769414662100291",
            "extra": "mean: 511.08765540000144 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.8776064876934178,
            "unit": "iter/sec",
            "range": "stddev: 0.06794480625373026",
            "extra": "mean: 532.5929615999939 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.8595864227727257,
            "unit": "iter/sec",
            "range": "stddev: 0.06509177647933953",
            "extra": "mean: 537.7539800000022 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 22.43018543101823,
            "unit": "iter/sec",
            "range": "stddev: 0.0011765109282349318",
            "extra": "mean: 44.5827789999953 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e11961d18793e0d2efbd3b8bb4c4e52f3d897e8",
          "message": "Only enable bazel caching writes for tensorflow/io github actions (#1293)\n\nThis PR updates so that only GitHub actions run on\r\ntensorflow/io repo will be enabled with bazel cache writes.\r\n\r\nWithout the updates, a focked repo actions will cause error.\r\n\r\nNote once bazel cache read-permissions are enabled from gcs\r\nforked repo will be able to access bazel cache (read-only).\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-02T11:32:07-08:00",
          "tree_id": "2574efb48b8e713170fc87beff9c8aacbb0d64f2",
          "url": "https://github.com/tensorflow/io/commit/8e11961d18793e0d2efbd3b8bb4c4e52f3d897e8"
        },
        "date": 1612294856280,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 6127.2412888086155,
            "unit": "iter/sec",
            "range": "stddev: 0.000007289314475054214",
            "extra": "mean: 163.20558516709576 usec\nrounds: 1591"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4427.9514851044705,
            "unit": "iter/sec",
            "range": "stddev: 0.00000659973810334805",
            "extra": "mean: 225.83806605920992 usec\nrounds: 3073"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1082.129415589172,
            "unit": "iter/sec",
            "range": "stddev: 0.000009537428585740762",
            "extra": "mean: 924.1038877550001 usec\nrounds: 980"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 575.4884652413044,
            "unit": "iter/sec",
            "range": "stddev: 0.000012023279293378528",
            "extra": "mean: 1.7376542891797082 msec\nrounds: 536"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1692.9938349216386,
            "unit": "iter/sec",
            "range": "stddev: 0.0000086629703467778",
            "extra": "mean: 590.66960515322 usec\nrounds: 1436"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 762.4194550971459,
            "unit": "iter/sec",
            "range": "stddev: 0.000015902503388100732",
            "extra": "mean: 1.3116139591067781 msec\nrounds: 269"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1266.0639881053676,
            "unit": "iter/sec",
            "range": "stddev: 0.000013733246115883614",
            "extra": "mean: 789.8494937025059 usec\nrounds: 794"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 4.69541752013681,
            "unit": "iter/sec",
            "range": "stddev: 0.034675203232698605",
            "extra": "mean: 212.9736057999935 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 35.8732094313392,
            "unit": "iter/sec",
            "range": "stddev: 0.00044046025944063114",
            "extra": "mean: 27.8759557857232 msec\nrounds: 14"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.6361558012633242,
            "unit": "iter/sec",
            "range": "stddev: 0.04663661904045737",
            "extra": "mean: 611.188738400017 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.6283465251830167,
            "unit": "iter/sec",
            "range": "stddev: 0.04595988375777503",
            "extra": "mean: 614.1198967999799 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.4398505086382813,
            "unit": "iter/sec",
            "range": "stddev: 0.04901757348041684",
            "extra": "mean: 694.5165445999919 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5826578431117988,
            "unit": "iter/sec",
            "range": "stddev: 0.06872303099269145",
            "extra": "mean: 1.7162731297999927 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.4683938877385501,
            "unit": "iter/sec",
            "range": "stddev: 0.06196178962509739",
            "extra": "mean: 2.1349552720000133 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.31742247245869515,
            "unit": "iter/sec",
            "range": "stddev: 0.13160325093974573",
            "extra": "mean: 3.1503755617999785 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 1.3926755667916129,
            "unit": "iter/sec",
            "range": "stddev: 0.07656438225489419",
            "extra": "mean: 718.0423236000024 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 0.8269196755575542,
            "unit": "iter/sec",
            "range": "stddev: 0.08729807261344644",
            "extra": "mean: 1.2093072998000025 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.376841855932881,
            "unit": "iter/sec",
            "range": "stddev: 0.05774239599036828",
            "extra": "mean: 420.72635060001176 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.2994588180443922,
            "unit": "iter/sec",
            "range": "stddev: 0.047840322277897925",
            "extra": "mean: 434.88493559996186 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 29.656000514125648,
            "unit": "iter/sec",
            "range": "stddev: 0.001471184853612979",
            "extra": "mean: 33.719988625023234 msec\nrounds: 8"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9c9ac76b72ef3874f374d330f57f94704631c30f",
          "message": "fix kafka online-learning section in tutorial notebook (#1274)\n\n* kafka notebook fix for colab env\r\n\r\n* change timeout from 30 to 20 seconds\r\n\r\n* reduce stream_timeout",
          "timestamp": "2021-02-02T11:30:47-08:00",
          "tree_id": "876ba662f5cb4651917cca09961171647d096a6b",
          "url": "https://github.com/tensorflow/io/commit/9c9ac76b72ef3874f374d330f57f94704631c30f"
        },
        "date": 1612294866040,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3770.3649418875298,
            "unit": "iter/sec",
            "range": "stddev: 0.000048166643908401",
            "extra": "mean: 265.2263150684234 usec\nrounds: 1314"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2974.7033120521646,
            "unit": "iter/sec",
            "range": "stddev: 0.00013347409873052432",
            "extra": "mean: 336.1679788194164 usec\nrounds: 2219"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 834.8521254129977,
            "unit": "iter/sec",
            "range": "stddev: 0.00015433290318421494",
            "extra": "mean: 1.1978169181821323 msec\nrounds: 660"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 469.66810938238206,
            "unit": "iter/sec",
            "range": "stddev: 0.0002189482095100619",
            "extra": "mean: 2.1291630835123323 msec\nrounds: 467"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1389.0626934034117,
            "unit": "iter/sec",
            "range": "stddev: 0.00008676520490360836",
            "extra": "mean: 719.9099110133396 usec\nrounds: 1135"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 487.9272026419401,
            "unit": "iter/sec",
            "range": "stddev: 0.00013092842121340822",
            "extra": "mean: 2.049486059775681 msec\nrounds: 184"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 853.0190617976101,
            "unit": "iter/sec",
            "range": "stddev: 0.00015818652590193812",
            "extra": "mean: 1.1723067452826312 msec\nrounds: 530"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 2.860591450521927,
            "unit": "iter/sec",
            "range": "stddev: 0.06700564915583203",
            "extra": "mean: 349.5780565999894 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 23.470253802664686,
            "unit": "iter/sec",
            "range": "stddev: 0.003948271330255497",
            "extra": "mean: 42.60712340002328 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.8029262932673005,
            "unit": "iter/sec",
            "range": "stddev: 0.05025372825863185",
            "extra": "mean: 1.245444330799978 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.8073405612714423,
            "unit": "iter/sec",
            "range": "stddev: 0.05972229621856316",
            "extra": "mean: 1.2386346580000236 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.8096180038442096,
            "unit": "iter/sec",
            "range": "stddev: 0.06500354107941295",
            "extra": "mean: 1.2351503984000147 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.36764873851870616,
            "unit": "iter/sec",
            "range": "stddev: 0.07289932029669641",
            "extra": "mean: 2.7199875729999805 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.2801543757046364,
            "unit": "iter/sec",
            "range": "stddev: 0.12063328793203752",
            "extra": "mean: 3.5694605786000237 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5665567183507978,
            "unit": "iter/sec",
            "range": "stddev: 0.02034738194261526",
            "extra": "mean: 1.7650483484000006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 2.093202806369519,
            "unit": "iter/sec",
            "range": "stddev: 0.06459479972598302",
            "extra": "mean: 477.7367950000098 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.37873227604437,
            "unit": "iter/sec",
            "range": "stddev: 0.06993016259881932",
            "extra": "mean: 725.3039747999765 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.3967403571357508,
            "unit": "iter/sec",
            "range": "stddev: 0.07211467377960636",
            "extra": "mean: 715.952678599956 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.3914677296594342,
            "unit": "iter/sec",
            "range": "stddev: 0.06373910761554083",
            "extra": "mean: 718.6656065999841 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 18.812386400037493,
            "unit": "iter/sec",
            "range": "stddev: 0.0018311745212093243",
            "extra": "mean: 53.15646716665393 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0217f86f28fe340e1f15d1019c0670c55753097a",
          "message": "Enable ready-only bazel cache (#1294)\n\nThis PR enables read-only bazel cache\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-02T15:04:58-08:00",
          "tree_id": "d46c73b3766c11677e90815f681e814ea3222fbc",
          "url": "https://github.com/tensorflow/io/commit/0217f86f28fe340e1f15d1019c0670c55753097a"
        },
        "date": 1612307546738,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 6261.849109035502,
            "unit": "iter/sec",
            "range": "stddev: 0.000006782813381597131",
            "extra": "mean: 159.6972368045495 usec\nrounds: 1402"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4459.515776291176,
            "unit": "iter/sec",
            "range": "stddev: 0.000006563002767007027",
            "extra": "mean: 224.23959240517928 usec\nrounds: 2976"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1064.3883595626025,
            "unit": "iter/sec",
            "range": "stddev: 0.000018041129383622623",
            "extra": "mean: 939.5067044992279 usec\nrounds: 978"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 544.6205200576588,
            "unit": "iter/sec",
            "range": "stddev: 0.000023436460075333286",
            "extra": "mean: 1.8361408782286248 msec\nrounds: 542"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1797.1823033021776,
            "unit": "iter/sec",
            "range": "stddev: 0.000007889023168451778",
            "extra": "mean: 556.4265785182619 usec\nrounds: 1350"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 769.4282200054317,
            "unit": "iter/sec",
            "range": "stddev: 0.000018812547737591793",
            "extra": "mean: 1.2996663938228579 msec\nrounds: 259"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1279.4833148206615,
            "unit": "iter/sec",
            "range": "stddev: 0.000012798171278465857",
            "extra": "mean: 781.565486956088 usec\nrounds: 805"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 4.227321226291226,
            "unit": "iter/sec",
            "range": "stddev: 0.041739604455192134",
            "extra": "mean: 236.55642580001768 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 33.41284966131939,
            "unit": "iter/sec",
            "range": "stddev: 0.0005827626762825292",
            "extra": "mean: 29.92860561539164 msec\nrounds: 13"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.4748402165557468,
            "unit": "iter/sec",
            "range": "stddev: 0.05295493909452618",
            "extra": "mean: 678.0395521999935 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.4711539182064166,
            "unit": "iter/sec",
            "range": "stddev: 0.054408792943688555",
            "extra": "mean: 679.73852880001 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.4520503496472579,
            "unit": "iter/sec",
            "range": "stddev: 0.05438690363915889",
            "extra": "mean: 688.6813533999884 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5934158741804595,
            "unit": "iter/sec",
            "range": "stddev: 0.07053316609415652",
            "extra": "mean: 1.685158829599993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.4670113065584623,
            "unit": "iter/sec",
            "range": "stddev: 0.05556282507638884",
            "extra": "mean: 2.141275780600006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.801984830331821,
            "unit": "iter/sec",
            "range": "stddev: 0.08979523308254943",
            "extra": "mean: 1.2469063780000056 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.9532278683509077,
            "unit": "iter/sec",
            "range": "stddev: 0.054991621624510635",
            "extra": "mean: 252.9578443999867 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.274412933196225,
            "unit": "iter/sec",
            "range": "stddev: 0.0676850037578693",
            "extra": "mean: 439.6738980000009 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.226610567842778,
            "unit": "iter/sec",
            "range": "stddev: 0.06942718822948664",
            "extra": "mean: 449.1131114000041 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.2164760396126506,
            "unit": "iter/sec",
            "range": "stddev: 0.06621009199106354",
            "extra": "mean: 451.1666186000184 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 27.090350145208706,
            "unit": "iter/sec",
            "range": "stddev: 0.0016380250929997377",
            "extra": "mean: 36.91351328572117 msec\nrounds: 7"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0217f86f28fe340e1f15d1019c0670c55753097a",
          "message": "Enable ready-only bazel cache (#1294)\n\nThis PR enables read-only bazel cache\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-02T15:04:58-08:00",
          "tree_id": "d46c73b3766c11677e90815f681e814ea3222fbc",
          "url": "https://github.com/tensorflow/io/commit/0217f86f28fe340e1f15d1019c0670c55753097a"
        },
        "date": 1612307592462,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 6235.563758551819,
            "unit": "iter/sec",
            "range": "stddev: 0.000008409125512008244",
            "extra": "mean: 160.3704233845001 usec\nrounds: 1377"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4483.679001173191,
            "unit": "iter/sec",
            "range": "stddev: 0.000006664482952645971",
            "extra": "mean: 223.03113129604992 usec\nrounds: 2978"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1087.0388901986494,
            "unit": "iter/sec",
            "range": "stddev: 0.000008976006958929296",
            "extra": "mean: 919.9302886185208 usec\nrounds: 984"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 567.823786261546,
            "unit": "iter/sec",
            "range": "stddev: 0.000013496667384511257",
            "extra": "mean: 1.7611097389629056 msec\nrounds: 521"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1660.702225855728,
            "unit": "iter/sec",
            "range": "stddev: 0.000009454623965132172",
            "extra": "mean: 602.1549103932338 usec\nrounds: 1395"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 774.3724339507415,
            "unit": "iter/sec",
            "range": "stddev: 0.000014108118300800064",
            "extra": "mean: 1.291368282440192 msec\nrounds: 262"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1273.437253339471,
            "unit": "iter/sec",
            "range": "stddev: 0.000013055138301174754",
            "extra": "mean: 785.276225724976 usec\nrounds: 793"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 4.307340268374485,
            "unit": "iter/sec",
            "range": "stddev: 0.03769260200118967",
            "extra": "mean: 232.16183020000472 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 32.76591357372782,
            "unit": "iter/sec",
            "range": "stddev: 0.0008023241327256842",
            "extra": "mean: 30.51952138462009 msec\nrounds: 13"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.4494958352569707,
            "unit": "iter/sec",
            "range": "stddev: 0.053555674600896566",
            "extra": "mean: 689.8950487999969 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.4594193087674272,
            "unit": "iter/sec",
            "range": "stddev: 0.05514832961988698",
            "extra": "mean: 685.2040355999975 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.4404014842349506,
            "unit": "iter/sec",
            "range": "stddev: 0.054232223731056586",
            "extra": "mean: 694.2508814000121 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.6016487811826151,
            "unit": "iter/sec",
            "range": "stddev: 0.07084147444851877",
            "extra": "mean: 1.6620992699999761 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.4649448692504722,
            "unit": "iter/sec",
            "range": "stddev: 0.05220225868280044",
            "extra": "mean: 2.1507926339999814 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.8052377926491415,
            "unit": "iter/sec",
            "range": "stddev: 0.00991380716645243",
            "extra": "mean: 1.2418691833999902 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.906233236766,
            "unit": "iter/sec",
            "range": "stddev: 0.05709740677530616",
            "extra": "mean: 256.00109860001794 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.2997629980163867,
            "unit": "iter/sec",
            "range": "stddev: 0.06539220688600232",
            "extra": "mean: 434.82741519997035 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.242638681496082,
            "unit": "iter/sec",
            "range": "stddev: 0.06753528226365316",
            "extra": "mean: 445.9033050000244 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.215459861835962,
            "unit": "iter/sec",
            "range": "stddev: 0.0667797806379725",
            "extra": "mean: 451.37355780000235 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 25.838632689249017,
            "unit": "iter/sec",
            "range": "stddev: 0.0010923211678836873",
            "extra": "mean: 38.70173828571361 msec\nrounds: 7"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa22376e81911b96bf1c052148dc5afea63f79cb",
          "message": "Update xz to 5.2.5, and switch the download link. (#1296)\n\nThis PR updates xz to 5.2.5, and switch the download link\r\nto use github instead as it is more stable.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-02T18:40:41-08:00",
          "tree_id": "874955f5ac7c48812b23b939b482acc857c0c754",
          "url": "https://github.com/tensorflow/io/commit/aa22376e81911b96bf1c052148dc5afea63f79cb"
        },
        "date": 1612320565542,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5307.930017163913,
            "unit": "iter/sec",
            "range": "stddev: 0.000008386944203917347",
            "extra": "mean: 188.39735956698073 usec\nrounds: 1385"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3797.0343762815082,
            "unit": "iter/sec",
            "range": "stddev: 0.000008072108978434124",
            "extra": "mean: 263.36343074652774 usec\nrounds: 2628"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 884.7751177702589,
            "unit": "iter/sec",
            "range": "stddev: 0.00007724950362106677",
            "extra": "mean: 1.1302306992087683 msec\nrounds: 758"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 455.41353646828895,
            "unit": "iter/sec",
            "range": "stddev: 0.00003878474917715029",
            "extra": "mean: 2.195806492171827 msec\nrounds: 447"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1466.2605787194398,
            "unit": "iter/sec",
            "range": "stddev: 0.000039988420692836846",
            "extra": "mean: 682.0070146558471 usec\nrounds: 1160"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 657.1247695360104,
            "unit": "iter/sec",
            "range": "stddev: 0.000021712040500482608",
            "extra": "mean: 1.5217810168776482 msec\nrounds: 237"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1097.7283728334962,
            "unit": "iter/sec",
            "range": "stddev: 0.00001517307531012198",
            "extra": "mean: 910.9721719397338 usec\nrounds: 727"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.392142443279552,
            "unit": "iter/sec",
            "range": "stddev: 0.03329409335137551",
            "extra": "mean: 294.7989410000105 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 28.34884061732854,
            "unit": "iter/sec",
            "range": "stddev: 0.0006110480766292354",
            "extra": "mean: 35.27481118182798 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2756121638920785,
            "unit": "iter/sec",
            "range": "stddev: 0.04923480029681428",
            "extra": "mean: 783.9373347999867 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.281885784351427,
            "unit": "iter/sec",
            "range": "stddev: 0.05084286434662338",
            "extra": "mean: 780.1007018000064 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.2239343927750308,
            "unit": "iter/sec",
            "range": "stddev: 0.05873723453571701",
            "extra": "mean: 817.0372577999842 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.45493131864623354,
            "unit": "iter/sec",
            "range": "stddev: 0.06807190986861573",
            "extra": "mean: 2.198134001800008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.36229323813041875,
            "unit": "iter/sec",
            "range": "stddev: 0.049362407560136275",
            "extra": "mean: 2.7601950429999986 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.714138249226124,
            "unit": "iter/sec",
            "range": "stddev: 0.024666400206391235",
            "extra": "mean: 1.4002890911999883 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.4640633642977905,
            "unit": "iter/sec",
            "range": "stddev: 0.05451759071926601",
            "extra": "mean: 288.67832220000764 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.006236317380458,
            "unit": "iter/sec",
            "range": "stddev: 0.06282329919771427",
            "extra": "mean: 498.4457670000211 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.8835184194745547,
            "unit": "iter/sec",
            "range": "stddev: 0.06348901224464518",
            "extra": "mean: 530.9212745999957 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.84492583286533,
            "unit": "iter/sec",
            "range": "stddev: 0.06590535578604341",
            "extra": "mean: 542.0272090000026 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 22.320590125801786,
            "unit": "iter/sec",
            "range": "stddev: 0.003920575460742091",
            "extra": "mean: 44.80168285712288 msec\nrounds: 7"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa22376e81911b96bf1c052148dc5afea63f79cb",
          "message": "Update xz to 5.2.5, and switch the download link. (#1296)\n\nThis PR updates xz to 5.2.5, and switch the download link\r\nto use github instead as it is more stable.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-02T18:40:41-08:00",
          "tree_id": "874955f5ac7c48812b23b939b482acc857c0c754",
          "url": "https://github.com/tensorflow/io/commit/aa22376e81911b96bf1c052148dc5afea63f79cb"
        },
        "date": 1612320593374,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3354.2090495556404,
            "unit": "iter/sec",
            "range": "stddev: 0.00030331071502126284",
            "extra": "mean: 298.1328787877661 usec\nrounds: 1254"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2828.019147483438,
            "unit": "iter/sec",
            "range": "stddev: 0.0002155549903581459",
            "extra": "mean: 353.60439510809795 usec\nrounds: 2412"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 776.2626454462962,
            "unit": "iter/sec",
            "range": "stddev: 0.0004588029044247204",
            "extra": "mean: 1.2882237807862964 msec\nrounds: 812"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 456.3004660665622,
            "unit": "iter/sec",
            "range": "stddev: 0.00024186470880597038",
            "extra": "mean: 2.1915384146334103 msec\nrounds: 123"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1277.7485115849342,
            "unit": "iter/sec",
            "range": "stddev: 0.0002636795225829715",
            "extra": "mean: 782.6266209143052 usec\nrounds: 1224"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 463.5888282240175,
            "unit": "iter/sec",
            "range": "stddev: 0.0004234683702350146",
            "extra": "mean: 2.157083905216058 msec\nrounds: 211"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 804.472657369479,
            "unit": "iter/sec",
            "range": "stddev: 0.0003179909162715145",
            "extra": "mean: 1.2430503272415374 msec\nrounds: 602"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 2.653223390803013,
            "unit": "iter/sec",
            "range": "stddev: 0.059314154378857925",
            "extra": "mean: 376.90003919999526 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 23.703439817118188,
            "unit": "iter/sec",
            "range": "stddev: 0.0034928431229181603",
            "extra": "mean: 42.1879696666565 msec\nrounds: 9"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7262750627096708,
            "unit": "iter/sec",
            "range": "stddev: 0.04484499196863076",
            "extra": "mean: 1.3768888005999884 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.724046802199368,
            "unit": "iter/sec",
            "range": "stddev: 0.0476228822346451",
            "extra": "mean: 1.3811261881999826 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.714569340637986,
            "unit": "iter/sec",
            "range": "stddev: 0.06515310999604293",
            "extra": "mean: 1.399444313000015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.3474420648375826,
            "unit": "iter/sec",
            "range": "stddev: 0.08744738649910642",
            "extra": "mean: 2.8781776912000168 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.2678272057012241,
            "unit": "iter/sec",
            "range": "stddev: 0.06926577668919484",
            "extra": "mean: 3.733750637399976 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5494272118353891,
            "unit": "iter/sec",
            "range": "stddev: 0.010676360538441083",
            "extra": "mean: 1.8200773068000218 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 1.9677203094379183,
            "unit": "iter/sec",
            "range": "stddev: 0.05909167466129252",
            "extra": "mean: 508.20230659999197 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.2472098487627659,
            "unit": "iter/sec",
            "range": "stddev: 0.06684836734162027",
            "extra": "mean: 801.7896916000154 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.2276854227901903,
            "unit": "iter/sec",
            "range": "stddev: 0.06125931931528651",
            "extra": "mean: 814.5409087999724 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.2317665881582223,
            "unit": "iter/sec",
            "range": "stddev: 0.07564845415388181",
            "extra": "mean: 811.8421213999909 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 21.36342914484297,
            "unit": "iter/sec",
            "range": "stddev: 0.0022423563785153376",
            "extra": "mean: 46.808964666676424 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5e8e87baaddfb5ef852810e76349b9db8c275bc",
          "message": "Enable bazel remote cache for kokoro tests (#1295)",
          "timestamp": "2021-02-02T19:05:37-08:00",
          "tree_id": "ee8515cd57a37ed84416250f20e7b3d24764fbfe",
          "url": "https://github.com/tensorflow/io/commit/c5e8e87baaddfb5ef852810e76349b9db8c275bc"
        },
        "date": 1612321983601,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5287.575060689021,
            "unit": "iter/sec",
            "range": "stddev: 0.000009778264685665528",
            "extra": "mean: 189.1226107473339 usec\nrounds: 1377"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3782.2942638091704,
            "unit": "iter/sec",
            "range": "stddev: 0.000009904905780701507",
            "extra": "mean: 264.389793667956 usec\nrounds: 2811"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 889.2603903498205,
            "unit": "iter/sec",
            "range": "stddev: 0.000015124031876011687",
            "extra": "mean: 1.1245300148886834 msec\nrounds: 806"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 455.99455470668823,
            "unit": "iter/sec",
            "range": "stddev: 0.000022893312446578747",
            "extra": "mean: 2.193008643805484 msec\nrounds: 452"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1470.178931048025,
            "unit": "iter/sec",
            "range": "stddev: 0.00003902481904373182",
            "extra": "mean: 680.1893149748408 usec\nrounds: 1162"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 657.991028862396,
            "unit": "iter/sec",
            "range": "stddev: 0.00002165927804267187",
            "extra": "mean: 1.5197775594735767 msec\nrounds: 227"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1093.9365071528275,
            "unit": "iter/sec",
            "range": "stddev: 0.00001748458247486275",
            "extra": "mean: 914.1298361114991 usec\nrounds: 720"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.703947497528342,
            "unit": "iter/sec",
            "range": "stddev: 0.039912777440939476",
            "extra": "mean: 269.9822285999744 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 26.905425938236906,
            "unit": "iter/sec",
            "range": "stddev: 0.004178624661958846",
            "extra": "mean: 37.167224272738245 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2487825066755758,
            "unit": "iter/sec",
            "range": "stddev: 0.04498804476316288",
            "extra": "mean: 800.7799554000258 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.2769995892257038,
            "unit": "iter/sec",
            "range": "stddev: 0.05576982220662092",
            "extra": "mean: 783.085608200031 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.2567004130556305,
            "unit": "iter/sec",
            "range": "stddev: 0.0531453020478086",
            "extra": "mean: 795.7345996000186 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5111483847737542,
            "unit": "iter/sec",
            "range": "stddev: 0.05775633924436069",
            "extra": "mean: 1.956379066799991 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3923730994678896,
            "unit": "iter/sec",
            "range": "stddev: 0.056935536176014115",
            "extra": "mean: 2.5485946956000136 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6976382254579896,
            "unit": "iter/sec",
            "range": "stddev: 0.01286790949561117",
            "extra": "mean: 1.433407694000016 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.43609517954515,
            "unit": "iter/sec",
            "range": "stddev: 0.05594435786752669",
            "extra": "mean: 291.02802679999513 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.002749824375927,
            "unit": "iter/sec",
            "range": "stddev: 0.06573978792380712",
            "extra": "mean: 499.31348780000917 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.9314852832182698,
            "unit": "iter/sec",
            "range": "stddev: 0.06721504840594746",
            "extra": "mean: 517.7362771999924 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.9072571434894567,
            "unit": "iter/sec",
            "range": "stddev: 0.06831951537240322",
            "extra": "mean: 524.3131495999705 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 23.680160782610418,
            "unit": "iter/sec",
            "range": "stddev: 0.001057154870443077",
            "extra": "mean: 42.229442999996536 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5e8e87baaddfb5ef852810e76349b9db8c275bc",
          "message": "Enable bazel remote cache for kokoro tests (#1295)",
          "timestamp": "2021-02-02T19:05:37-08:00",
          "tree_id": "ee8515cd57a37ed84416250f20e7b3d24764fbfe",
          "url": "https://github.com/tensorflow/io/commit/c5e8e87baaddfb5ef852810e76349b9db8c275bc"
        },
        "date": 1612322027225,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5400.217090192395,
            "unit": "iter/sec",
            "range": "stddev: 0.000008671241209238693",
            "extra": "mean: 185.17774069049005 usec\nrounds: 1450"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3865.9605181384145,
            "unit": "iter/sec",
            "range": "stddev: 0.000010688494713569188",
            "extra": "mean: 258.66792878721185 usec\nrounds: 2654"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 901.1798819906576,
            "unit": "iter/sec",
            "range": "stddev: 0.00022434708655427483",
            "extra": "mean: 1.109656373809693 msec\nrounds: 840"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 478.4426907195166,
            "unit": "iter/sec",
            "range": "stddev: 0.0000339358294146055",
            "extra": "mean: 2.0901144889393715 msec\nrounds: 452"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1390.4261663037162,
            "unit": "iter/sec",
            "range": "stddev: 0.000041665669388713555",
            "extra": "mean: 719.2039564807544 usec\nrounds: 1057"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 657.0778105411501,
            "unit": "iter/sec",
            "range": "stddev: 0.00001927477561798172",
            "extra": "mean: 1.5218897731098682 msec\nrounds: 238"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1098.8354664872882,
            "unit": "iter/sec",
            "range": "stddev: 0.000023634166599282876",
            "extra": "mean: 910.0543534481633 usec\nrounds: 696"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.6939431102634024,
            "unit": "iter/sec",
            "range": "stddev: 0.034079995344393085",
            "extra": "mean: 270.7134273999941 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 28.81168019230139,
            "unit": "iter/sec",
            "range": "stddev: 0.0006557462621951041",
            "extra": "mean: 34.7081459090749 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2708610830087046,
            "unit": "iter/sec",
            "range": "stddev: 0.04842237404605854",
            "extra": "mean: 786.868063999998 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.2773032615462707,
            "unit": "iter/sec",
            "range": "stddev: 0.049299364235187826",
            "extra": "mean: 782.8994335999937 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.247603883172077,
            "unit": "iter/sec",
            "range": "stddev: 0.048234386943767714",
            "extra": "mean: 801.5364599999998 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5175093780909543,
            "unit": "iter/sec",
            "range": "stddev: 0.05720601303486433",
            "extra": "mean: 1.9323321322000198 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.394075624750799,
            "unit": "iter/sec",
            "range": "stddev: 0.04366149168009495",
            "extra": "mean: 2.5375839995999967 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.716768950587443,
            "unit": "iter/sec",
            "range": "stddev: 0.0031044234865272597",
            "extra": "mean: 1.3951497190000055 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.469449016933794,
            "unit": "iter/sec",
            "range": "stddev: 0.05024273702174708",
            "extra": "mean: 288.23020459997224 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.0141921866758015,
            "unit": "iter/sec",
            "range": "stddev: 0.059162892636296635",
            "extra": "mean: 496.4769531999764 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.9367447475266204,
            "unit": "iter/sec",
            "range": "stddev: 0.05716062204512661",
            "extra": "mean: 516.3303018000079 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.9146232157621366,
            "unit": "iter/sec",
            "range": "stddev: 0.05927107484240837",
            "extra": "mean: 522.2959754000158 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 23.985094415086024,
            "unit": "iter/sec",
            "range": "stddev: 0.0035270144459854462",
            "extra": "mean: 41.69256050003393 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4103a58d9a1b2ec00b1c4705b2937a5ed860da9e",
          "message": "Fix wrong benchmark tests names (#1301)\n\nFixes wrong benchmark tests names caused by last commit\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-04T12:54:30-08:00",
          "tree_id": "80e29ddb5a147f00c553c6faa66a9b307e5bd228",
          "url": "https://github.com/tensorflow/io/commit/4103a58d9a1b2ec00b1c4705b2937a5ed860da9e"
        },
        "date": 1612473705953,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3712.9531288796493,
            "unit": "iter/sec",
            "range": "stddev: 0.00009208077973019667",
            "extra": "mean: 269.3273966272074 usec\nrounds: 1185"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3078.561117601953,
            "unit": "iter/sec",
            "range": "stddev: 0.00009879516338215173",
            "extra": "mean: 324.8270740127292 usec\nrounds: 2405"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 899.058824185924,
            "unit": "iter/sec",
            "range": "stddev: 0.00019979427554933177",
            "extra": "mean: 1.1122742729381203 msec\nrounds: 872"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 497.222839758415,
            "unit": "iter/sec",
            "range": "stddev: 0.00024782871886906065",
            "extra": "mean: 2.011170686539397 msec\nrounds: 520"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1400.776606681479,
            "unit": "iter/sec",
            "range": "stddev: 0.00015110534873389054",
            "extra": "mean: 713.8897060603103 usec\nrounds: 1337"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 503.90421169276595,
            "unit": "iter/sec",
            "range": "stddev: 0.00023370901203632161",
            "extra": "mean: 1.984504151375713 msec\nrounds: 218"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 868.5237868559134,
            "unit": "iter/sec",
            "range": "stddev: 0.00021236147869594857",
            "extra": "mean: 1.1513789433678439 msec\nrounds: 671"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 2.971825331779266,
            "unit": "iter/sec",
            "range": "stddev: 0.05576681332129142",
            "extra": "mean: 336.4935311999943 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 25.994487103368193,
            "unit": "iter/sec",
            "range": "stddev: 0.002096842958405948",
            "extra": "mean: 38.46969536361526 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7666819318457283,
            "unit": "iter/sec",
            "range": "stddev: 0.05754693528996174",
            "extra": "mean: 1.304321855599983 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.7588596121345943,
            "unit": "iter/sec",
            "range": "stddev: 0.07620907088438297",
            "extra": "mean: 1.3177667964000648 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7519807598082263,
            "unit": "iter/sec",
            "range": "stddev: 0.061723948713218624",
            "extra": "mean: 1.3298212580000381 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.38672696671624457,
            "unit": "iter/sec",
            "range": "stddev: 0.05657314624660492",
            "extra": "mean: 2.5858036446000825 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.2983670026348232,
            "unit": "iter/sec",
            "range": "stddev: 0.08806995648645824",
            "extra": "mean: 3.351577055000007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5947362006860506,
            "unit": "iter/sec",
            "range": "stddev: 0.061115024221824674",
            "extra": "mean: 1.6814177425999333 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.1284456755737713,
            "unit": "iter/sec",
            "range": "stddev: 0.055098474091130875",
            "extra": "mean: 469.826414399995 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.3039674841709048,
            "unit": "iter/sec",
            "range": "stddev: 0.06475445341390428",
            "extra": "mean: 766.8902883999635 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.3745339171975899,
            "unit": "iter/sec",
            "range": "stddev: 0.07837006577877469",
            "extra": "mean: 727.5193339999987 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.288792388296343,
            "unit": "iter/sec",
            "range": "stddev: 0.07560174441238869",
            "extra": "mean: 775.9201629999552 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 21.829509428425812,
            "unit": "iter/sec",
            "range": "stddev: 0.001953983511364618",
            "extra": "mean: 45.80954983339325 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4103a58d9a1b2ec00b1c4705b2937a5ed860da9e",
          "message": "Fix wrong benchmark tests names (#1301)\n\nFixes wrong benchmark tests names caused by last commit\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-04T12:54:30-08:00",
          "tree_id": "80e29ddb5a147f00c553c6faa66a9b307e5bd228",
          "url": "https://github.com/tensorflow/io/commit/4103a58d9a1b2ec00b1c4705b2937a5ed860da9e"
        },
        "date": 1612473811765,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3683.9243742727713,
            "unit": "iter/sec",
            "range": "stddev: 0.00009726686665439929",
            "extra": "mean: 271.4496548799013 usec\nrounds: 1301"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2844.3724676045426,
            "unit": "iter/sec",
            "range": "stddev: 0.00011494001916857534",
            "extra": "mean: 351.5713962883962 usec\nrounds: 2102"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 767.4719072883618,
            "unit": "iter/sec",
            "range": "stddev: 0.00020726065830320762",
            "extra": "mean: 1.302979288887861 msec\nrounds: 720"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 453.14171246090604,
            "unit": "iter/sec",
            "range": "stddev: 0.00031771012675669587",
            "extra": "mean: 2.2068151584837232 msec\nrounds: 448"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1214.2316620964975,
            "unit": "iter/sec",
            "range": "stddev: 0.00013270282361004735",
            "extra": "mean: 823.5660716287003 usec\nrounds: 1075"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 459.8685005219206,
            "unit": "iter/sec",
            "range": "stddev: 0.00037307500024321886",
            "extra": "mean: 2.174534674292902 msec\nrounds: 175"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 778.1883042352822,
            "unit": "iter/sec",
            "range": "stddev: 0.0003219011419945239",
            "extra": "mean: 1.2850360183486564 msec\nrounds: 545"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 2.715888169471688,
            "unit": "iter/sec",
            "range": "stddev: 0.06837557935172875",
            "extra": "mean: 368.203673200037 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 22.933236471500237,
            "unit": "iter/sec",
            "range": "stddev: 0.0015027659947173077",
            "extra": "mean: 43.604835333326264 msec\nrounds: 9"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7410887495398811,
            "unit": "iter/sec",
            "range": "stddev: 0.08271931968211774",
            "extra": "mean: 1.3493660517999615 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.7361097245155388,
            "unit": "iter/sec",
            "range": "stddev: 0.06772921117378942",
            "extra": "mean: 1.3584931249999954 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7444871659321981,
            "unit": "iter/sec",
            "range": "stddev: 0.05017377598790326",
            "extra": "mean: 1.3432064993999802 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.32945071772776496,
            "unit": "iter/sec",
            "range": "stddev: 0.1043604443933811",
            "extra": "mean: 3.035355354199987 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.25508765097053904,
            "unit": "iter/sec",
            "range": "stddev: 0.0877898318654666",
            "extra": "mean: 3.9202211325999996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5448369322757638,
            "unit": "iter/sec",
            "range": "stddev: 0.05072367077183389",
            "extra": "mean: 1.8354115529999717 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.0483343254973514,
            "unit": "iter/sec",
            "range": "stddev: 0.06174916429291103",
            "extra": "mean: 488.2015535999926 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.2895847172103165,
            "unit": "iter/sec",
            "range": "stddev: 0.07406263819133843",
            "extra": "mean: 775.4434328000116 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.2463639143143508,
            "unit": "iter/sec",
            "range": "stddev: 0.0830300046979662",
            "extra": "mean: 802.3338837999972 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.2533273148689381,
            "unit": "iter/sec",
            "range": "stddev: 0.07230170743074113",
            "extra": "mean: 797.8761717999987 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 18.309158579469525,
            "unit": "iter/sec",
            "range": "stddev: 0.0026768766276660644",
            "extra": "mean: 54.61747440001545 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22eddcb9d73825e81685a72d8413aad4c1f90061",
          "message": "Patch arrow to temporarily resolve the ARROW-11518 issue (#1304)\n\nThis PR patchs arrow to temporarily resolve the ARROW-11518 issue.\r\n\r\nSee 1281 for details\r\n\r\nCredit to diggerk.\r\n\r\nWe will update arrow after the upstream PR is merged.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-07T18:08:19-08:00",
          "tree_id": "3f54c9043912511d8abae0636b2fc228579047e5",
          "url": "https://github.com/tensorflow/io/commit/22eddcb9d73825e81685a72d8413aad4c1f90061"
        },
        "date": 1612750582057,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5186.751100978837,
            "unit": "iter/sec",
            "range": "stddev: 0.000226621537152733",
            "extra": "mean: 192.79891796066352 usec\nrounds: 1353"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3985.6497334065957,
            "unit": "iter/sec",
            "range": "stddev: 0.00011791029017424032",
            "extra": "mean: 250.900120905829 usec\nrounds: 2870"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 886.3347446200098,
            "unit": "iter/sec",
            "range": "stddev: 0.0007015742705340179",
            "extra": "mean: 1.1282419041676186 msec\nrounds: 480"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 504.0575808855793,
            "unit": "iter/sec",
            "range": "stddev: 0.00013165407410351947",
            "extra": "mean: 1.9839003279012273 msec\nrounds: 491"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1514.736295034143,
            "unit": "iter/sec",
            "range": "stddev: 0.00006514232241189771",
            "extra": "mean: 660.1809194632517 usec\nrounds: 1192"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 718.2137528368253,
            "unit": "iter/sec",
            "range": "stddev: 0.00009084426269313763",
            "extra": "mean: 1.3923431513949236 msec\nrounds: 251"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1185.9998772229708,
            "unit": "iter/sec",
            "range": "stddev: 0.00006654057362892784",
            "extra": "mean: 843.1704076913641 usec\nrounds: 780"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.6858810246303775,
            "unit": "iter/sec",
            "range": "stddev: 0.045064103186392646",
            "extra": "mean: 271.3055557999951 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 29.330484443832237,
            "unit": "iter/sec",
            "range": "stddev: 0.0016044252051540637",
            "extra": "mean: 34.09422036362871 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.3749048160270516,
            "unit": "iter/sec",
            "range": "stddev: 0.051526329772888735",
            "extra": "mean: 727.3230759999933 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.4004882393863962,
            "unit": "iter/sec",
            "range": "stddev: 0.048450494892420364",
            "extra": "mean: 714.0366994000146 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.2715253429137576,
            "unit": "iter/sec",
            "range": "stddev: 0.058209188153504475",
            "extra": "mean: 786.4569948000053 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5302921960558368,
            "unit": "iter/sec",
            "range": "stddev: 0.05691989606483475",
            "extra": "mean: 1.885752812199985 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.401307509370825,
            "unit": "iter/sec",
            "range": "stddev: 0.06183778469858898",
            "extra": "mean: 2.491854691599997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7788483965086769,
            "unit": "iter/sec",
            "range": "stddev: 0.04892430632096868",
            "extra": "mean: 1.2839469201999691 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.868333699182591,
            "unit": "iter/sec",
            "range": "stddev: 0.05007961069374483",
            "extra": "mean: 258.50923879997936 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.1116559531190213,
            "unit": "iter/sec",
            "range": "stddev: 0.06289187495485543",
            "extra": "mean: 473.56199219998416 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.0460104087244546,
            "unit": "iter/sec",
            "range": "stddev: 0.07222094125062015",
            "extra": "mean: 488.7560667999878 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.9043809110522467,
            "unit": "iter/sec",
            "range": "stddev: 0.06356530918683917",
            "extra": "mean: 525.1050323999834 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 24.549177587639956,
            "unit": "iter/sec",
            "range": "stddev: 0.0008600241635347227",
            "extra": "mean: 40.7345621428671 msec\nrounds: 7"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22eddcb9d73825e81685a72d8413aad4c1f90061",
          "message": "Patch arrow to temporarily resolve the ARROW-11518 issue (#1304)\n\nThis PR patchs arrow to temporarily resolve the ARROW-11518 issue.\r\n\r\nSee 1281 for details\r\n\r\nCredit to diggerk.\r\n\r\nWe will update arrow after the upstream PR is merged.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-07T18:08:19-08:00",
          "tree_id": "3f54c9043912511d8abae0636b2fc228579047e5",
          "url": "https://github.com/tensorflow/io/commit/22eddcb9d73825e81685a72d8413aad4c1f90061"
        },
        "date": 1612750602026,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5457.643563822861,
            "unit": "iter/sec",
            "range": "stddev: 0.000008179691917765671",
            "extra": "mean: 183.2292615495652 usec\nrounds: 1407"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3868.011576134347,
            "unit": "iter/sec",
            "range": "stddev: 0.000008062235268583715",
            "extra": "mean: 258.5307671181766 usec\nrounds: 2585"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 891.9303186295774,
            "unit": "iter/sec",
            "range": "stddev: 0.000011870431848071356",
            "extra": "mean: 1.1211638164026851 msec\nrounds: 817"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 457.61599224093237,
            "unit": "iter/sec",
            "range": "stddev: 0.0000247387962441977",
            "extra": "mean: 2.18523831543349 msec\nrounds: 447"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1489.5570362432832,
            "unit": "iter/sec",
            "range": "stddev: 0.00003833442700129857",
            "extra": "mean: 671.3405231679052 usec\nrounds: 1187"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 674.3077052768872,
            "unit": "iter/sec",
            "range": "stddev: 0.000018004562606059382",
            "extra": "mean: 1.4830024811734512 msec\nrounds: 239"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1110.763847837363,
            "unit": "iter/sec",
            "range": "stddev: 0.00002105318785367226",
            "extra": "mean: 900.2813711906288 usec\nrounds: 722"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.5409224420793004,
            "unit": "iter/sec",
            "range": "stddev: 0.04123260359627041",
            "extra": "mean: 282.41228560001446 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 28.73437524264934,
            "unit": "iter/sec",
            "range": "stddev: 0.0010514428068451299",
            "extra": "mean: 34.80152227272852 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2901072039893282,
            "unit": "iter/sec",
            "range": "stddev: 0.052175318816917664",
            "extra": "mean: 775.1293821999866 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.2993553702325356,
            "unit": "iter/sec",
            "range": "stddev: 0.0496655972361952",
            "extra": "mean: 769.6123962000001 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.2760685100970268,
            "unit": "iter/sec",
            "range": "stddev: 0.054874073759064695",
            "extra": "mean: 783.6569839999925 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5111672251611751,
            "unit": "iter/sec",
            "range": "stddev: 0.07404167543941062",
            "extra": "mean: 1.9563069594000126 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.39115370030150376,
            "unit": "iter/sec",
            "range": "stddev: 0.06293505268833689",
            "extra": "mean: 2.5565397930000247 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7462137526473808,
            "unit": "iter/sec",
            "range": "stddev: 0.04905027796460147",
            "extra": "mean: 1.3400985929999933 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.580064515568953,
            "unit": "iter/sec",
            "range": "stddev: 0.051568958884293296",
            "extra": "mean: 279.32457520003027 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.9791747574506235,
            "unit": "iter/sec",
            "range": "stddev: 0.06236499731166792",
            "extra": "mean: 505.2610923999964 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.9499119457593659,
            "unit": "iter/sec",
            "range": "stddev: 0.06610316726930769",
            "extra": "mean: 512.8436707999981 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.8617230148054107,
            "unit": "iter/sec",
            "range": "stddev: 0.0612192062266467",
            "extra": "mean: 537.1368308000001 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 23.771609224807754,
            "unit": "iter/sec",
            "range": "stddev: 0.0015715660303421038",
            "extra": "mean: 42.066987999971516 msec\nrounds: 7"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b39aabb2d63a05c568b4b27e982feb773560d9a",
          "message": "Avoid error if plugins .so module is not available (#1302)\n\nThis PR raises a warning instead of an error in case\r\nplugins .so module is not available, so that tensorflow-io\r\npackage can be at least partially used with python-only\r\nfunctions.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-08T07:37:46-08:00",
          "tree_id": "d8266484061dbd8abb34b6af03b9fb50dbe17dd3",
          "url": "https://github.com/tensorflow/io/commit/1b39aabb2d63a05c568b4b27e982feb773560d9a"
        },
        "date": 1612799216239,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3689.935741575385,
            "unit": "iter/sec",
            "range": "stddev: 0.00007508144418747818",
            "extra": "mean: 271.0074294066322 usec\nrounds: 1027"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2914.352200394009,
            "unit": "iter/sec",
            "range": "stddev: 0.00007276760021603912",
            "extra": "mean: 343.12942679501947 usec\nrounds: 1769"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 788.7555531373846,
            "unit": "iter/sec",
            "range": "stddev: 0.00019255462279156178",
            "extra": "mean: 1.2678199171116595 msec\nrounds: 748"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 437.66412711708045,
            "unit": "iter/sec",
            "range": "stddev: 0.0002720803945114707",
            "extra": "mean: 2.2848571268270472 msec\nrounds: 410"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1216.5226946469186,
            "unit": "iter/sec",
            "range": "stddev: 0.00023145081755392128",
            "extra": "mean: 822.0150798668316 usec\nrounds: 1202"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 451.9875805182118,
            "unit": "iter/sec",
            "range": "stddev: 0.00041980394207031624",
            "extra": "mean: 2.212450171426131 msec\nrounds: 210"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 879.1679903522394,
            "unit": "iter/sec",
            "range": "stddev: 0.0001730310033528078",
            "extra": "mean: 1.1374390457497767 msec\nrounds: 612"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 2.7375069038009174,
            "unit": "iter/sec",
            "range": "stddev: 0.05254431249266393",
            "extra": "mean: 365.2958823999825 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 22.229092987875646,
            "unit": "iter/sec",
            "range": "stddev: 0.003270192954399405",
            "extra": "mean: 44.986090999998396 msec\nrounds: 9"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7575323797795768,
            "unit": "iter/sec",
            "range": "stddev: 0.056317359847961566",
            "extra": "mean: 1.3200755858000093 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.7628485171724637,
            "unit": "iter/sec",
            "range": "stddev: 0.05901309312383565",
            "extra": "mean: 1.3108762454000042 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7530644850709183,
            "unit": "iter/sec",
            "range": "stddev: 0.06950060917161664",
            "extra": "mean: 1.3279075295999747 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.32067357199552826,
            "unit": "iter/sec",
            "range": "stddev: 0.06490620909044639",
            "extra": "mean: 3.1184359651999785 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.2532245408040735,
            "unit": "iter/sec",
            "range": "stddev: 0.13689982184812025",
            "extra": "mean: 3.949064323799985 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5493338402767802,
            "unit": "iter/sec",
            "range": "stddev: 0.05349904803464339",
            "extra": "mean: 1.8203866695999522 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.1877871745508863,
            "unit": "iter/sec",
            "range": "stddev: 0.04233406068075254",
            "extra": "mean: 457.0828513999686 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.3325770937005126,
            "unit": "iter/sec",
            "range": "stddev: 0.0817852258809419",
            "extra": "mean: 750.4256262000126 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.249252464190299,
            "unit": "iter/sec",
            "range": "stddev: 0.0811060177938175",
            "extra": "mean: 800.4787092000242 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.2763241840627817,
            "unit": "iter/sec",
            "range": "stddev: 0.062447438236683146",
            "extra": "mean: 783.5000013999661 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 19.06999856877364,
            "unit": "iter/sec",
            "range": "stddev: 0.0024469431605363915",
            "extra": "mean: 52.43838883330909 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b39aabb2d63a05c568b4b27e982feb773560d9a",
          "message": "Avoid error if plugins .so module is not available (#1302)\n\nThis PR raises a warning instead of an error in case\r\nplugins .so module is not available, so that tensorflow-io\r\npackage can be at least partially used with python-only\r\nfunctions.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-08T07:37:46-08:00",
          "tree_id": "d8266484061dbd8abb34b6af03b9fb50dbe17dd3",
          "url": "https://github.com/tensorflow/io/commit/1b39aabb2d63a05c568b4b27e982feb773560d9a"
        },
        "date": 1612799236118,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3603.1528366330526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000966555150954052",
            "extra": "mean: 277.5347162166023 usec\nrounds: 1110"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2926.161419904481,
            "unit": "iter/sec",
            "range": "stddev: 0.00006688093444055161",
            "extra": "mean: 341.74464648387135 usec\nrounds: 2048"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 770.7790600803517,
            "unit": "iter/sec",
            "range": "stddev: 0.0003243483963873101",
            "extra": "mean: 1.2973886445432918 msec\nrounds: 678"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 442.8141807655573,
            "unit": "iter/sec",
            "range": "stddev: 0.0004591282142527758",
            "extra": "mean: 2.2582835948730335 msec\nrounds: 390"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1297.730541473084,
            "unit": "iter/sec",
            "range": "stddev: 0.00008974391321753646",
            "extra": "mean: 770.5759925052522 usec\nrounds: 1201"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 473.9309539462988,
            "unit": "iter/sec",
            "range": "stddev: 0.00033626985370377015",
            "extra": "mean: 2.110012000003929 msec\nrounds: 206"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 822.698195503619,
            "unit": "iter/sec",
            "range": "stddev: 0.00034666402115224304",
            "extra": "mean: 1.2155125724906262 msec\nrounds: 538"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 2.8018415244632107,
            "unit": "iter/sec",
            "range": "stddev: 0.06255249983131342",
            "extra": "mean: 356.90812320000305 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 23.02981806420843,
            "unit": "iter/sec",
            "range": "stddev: 0.001756739297242019",
            "extra": "mean: 43.421966999997295 msec\nrounds: 9"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7375630273624386,
            "unit": "iter/sec",
            "range": "stddev: 0.03857599141531866",
            "extra": "mean: 1.3558163342000058 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.7570727784956196,
            "unit": "iter/sec",
            "range": "stddev: 0.05502447848225283",
            "extra": "mean: 1.3208769730000085 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7502136375498334,
            "unit": "iter/sec",
            "range": "stddev: 0.03955747153943616",
            "extra": "mean: 1.3329536414000132 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.33035459235333614,
            "unit": "iter/sec",
            "range": "stddev: 0.07528901818938918",
            "extra": "mean: 3.027050397199969 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.2579091905286914,
            "unit": "iter/sec",
            "range": "stddev: 0.05130902299717372",
            "extra": "mean: 3.8773337156000025 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5767237025631102,
            "unit": "iter/sec",
            "range": "stddev: 0.06576761711624282",
            "extra": "mean: 1.7339325495999902 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.0993920846185814,
            "unit": "iter/sec",
            "range": "stddev: 0.0642589595251695",
            "extra": "mean: 476.3283653999679 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.3158888554973969,
            "unit": "iter/sec",
            "range": "stddev: 0.059972441645542746",
            "extra": "mean: 759.9426014000301 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.2675140769764273,
            "unit": "iter/sec",
            "range": "stddev: 0.05450593513269162",
            "extra": "mean: 788.9458730000342 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.2906951565395453,
            "unit": "iter/sec",
            "range": "stddev: 0.06532369301790096",
            "extra": "mean: 774.7762861999718 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 18.066910528540333,
            "unit": "iter/sec",
            "range": "stddev: 0.004177168327576896",
            "extra": "mean: 55.349806399954105 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8a604860efa50e9d58f79686a3b18cc55c5acce0",
          "message": "Remove AWS headers from tensorflow, and use headers from third_party … (#1241)\n\n* Remove external headers from tensorflow, and use third_party headers instead\r\n\r\nThis PR removes external headers from tensorflow, and\r\nuse third_party headers instead.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Address review comment\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-08T21:45:20+05:30",
          "tree_id": "3fc9c74b10b80b4e9a7f0b06bfee6dab2ed305eb",
          "url": "https://github.com/tensorflow/io/commit/8a604860efa50e9d58f79686a3b18cc55c5acce0"
        },
        "date": 1612801468381,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3698.380985537338,
            "unit": "iter/sec",
            "range": "stddev: 0.00006684246909828683",
            "extra": "mean: 270.3885846024351 usec\nrounds: 1117"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2985.5368695323195,
            "unit": "iter/sec",
            "range": "stddev: 0.00006417496386976518",
            "extra": "mean: 334.94813284843093 usec\nrounds: 2198"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 792.9019577211847,
            "unit": "iter/sec",
            "range": "stddev: 0.00015306964448395165",
            "extra": "mean: 1.261189974702571 msec\nrounds: 672"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 442.89732898819426,
            "unit": "iter/sec",
            "range": "stddev: 0.00018762073175109933",
            "extra": "mean: 2.2578596314511885 msec\nrounds: 407"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1313.0450179817717,
            "unit": "iter/sec",
            "range": "stddev: 0.00012098758028936109",
            "extra": "mean: 761.588510908072 usec\nrounds: 1100"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 469.5068673050894,
            "unit": "iter/sec",
            "range": "stddev: 0.0005241483676877898",
            "extra": "mean: 2.1298942989692033 msec\nrounds: 194"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 830.3503609867207,
            "unit": "iter/sec",
            "range": "stddev: 0.00021844898135628513",
            "extra": "mean: 1.2043109113744244 msec\nrounds: 598"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 2.69923645996451,
            "unit": "iter/sec",
            "range": "stddev: 0.08321795851365861",
            "extra": "mean: 370.47513800000615 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 23.83423372435197,
            "unit": "iter/sec",
            "range": "stddev: 0.0016260355980969273",
            "extra": "mean: 41.956456899987415 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.6879413525153841,
            "unit": "iter/sec",
            "range": "stddev: 0.10393953007573872",
            "extra": "mean: 1.4536122830000067 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.7129330294782155,
            "unit": "iter/sec",
            "range": "stddev: 0.07574784759635694",
            "extra": "mean: 1.4026562925999997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7168448092923301,
            "unit": "iter/sec",
            "range": "stddev: 0.1349133647247126",
            "extra": "mean: 1.3950020799999947 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.33841624530192743,
            "unit": "iter/sec",
            "range": "stddev: 0.06501501217971604",
            "extra": "mean: 2.9549408867999887 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.2709665708704086,
            "unit": "iter/sec",
            "range": "stddev: 0.10403539329681633",
            "extra": "mean: 3.690492140000015 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5671751192116082,
            "unit": "iter/sec",
            "range": "stddev: 0.09515933331210975",
            "extra": "mean: 1.7631238855999753 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 1.9395753004520475,
            "unit": "iter/sec",
            "range": "stddev: 0.0812320925366415",
            "extra": "mean: 515.5767862000175 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.1893530730421762,
            "unit": "iter/sec",
            "range": "stddev: 0.06001681915293447",
            "extra": "mean: 840.7932199999777 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.215072066330051,
            "unit": "iter/sec",
            "range": "stddev: 0.0791643739934749",
            "extra": "mean: 822.9964524000252 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.211704951080366,
            "unit": "iter/sec",
            "range": "stddev: 0.08144183030781786",
            "extra": "mean: 825.2834149999899 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 18.669646889956663,
            "unit": "iter/sec",
            "range": "stddev: 0.001447912640879504",
            "extra": "mean: 53.562876999990294 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8a604860efa50e9d58f79686a3b18cc55c5acce0",
          "message": "Remove AWS headers from tensorflow, and use headers from third_party … (#1241)\n\n* Remove external headers from tensorflow, and use third_party headers instead\r\n\r\nThis PR removes external headers from tensorflow, and\r\nuse third_party headers instead.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Address review comment\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-08T21:45:20+05:30",
          "tree_id": "3fc9c74b10b80b4e9a7f0b06bfee6dab2ed305eb",
          "url": "https://github.com/tensorflow/io/commit/8a604860efa50e9d58f79686a3b18cc55c5acce0"
        },
        "date": 1612801509140,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3030.8785670967923,
            "unit": "iter/sec",
            "range": "stddev: 0.0001724455056171859",
            "extra": "mean: 329.93733594476424 usec\nrounds: 1021"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2432.3828856395626,
            "unit": "iter/sec",
            "range": "stddev: 0.0002119246511060962",
            "extra": "mean: 411.11948530137073 usec\nrounds: 2347"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 720.7033163532698,
            "unit": "iter/sec",
            "range": "stddev: 0.0003039566077387553",
            "extra": "mean: 1.3875335069359198 msec\nrounds: 793"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 422.3797604144304,
            "unit": "iter/sec",
            "range": "stddev: 0.0005994828185304992",
            "extra": "mean: 2.3675376846154284 msec\nrounds: 390"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1155.3367580931877,
            "unit": "iter/sec",
            "range": "stddev: 0.00031762029376017445",
            "extra": "mean: 865.548501763623 usec\nrounds: 851"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 401.5615748045452,
            "unit": "iter/sec",
            "range": "stddev: 0.0006690754565202537",
            "extra": "mean: 2.4902781111134367 msec\nrounds: 180"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 735.1594354395562,
            "unit": "iter/sec",
            "range": "stddev: 0.00033068391411949767",
            "extra": "mean: 1.3602491538479595 msec\nrounds: 273"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 2.237882826782659,
            "unit": "iter/sec",
            "range": "stddev: 0.06556309526559029",
            "extra": "mean: 446.85091999998576 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 20.18508760939418,
            "unit": "iter/sec",
            "range": "stddev: 0.005316819566185336",
            "extra": "mean: 49.5415238888831 msec\nrounds: 9"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.555870193958518,
            "unit": "iter/sec",
            "range": "stddev: 0.12777505364280112",
            "extra": "mean: 1.7989811486000007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.5816610006531523,
            "unit": "iter/sec",
            "range": "stddev: 0.08949824317682599",
            "extra": "mean: 1.7192144546000008 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.5964214640111571,
            "unit": "iter/sec",
            "range": "stddev: 0.09928565343800222",
            "extra": "mean: 1.6766666868000129 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.28138062626196425,
            "unit": "iter/sec",
            "range": "stddev: 0.10262079390849048",
            "extra": "mean: 3.5539049481999654 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.2178148472217607,
            "unit": "iter/sec",
            "range": "stddev: 0.08550450304086137",
            "extra": "mean: 4.59105525980001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.48440322699194654,
            "unit": "iter/sec",
            "range": "stddev: 0.06453530595776576",
            "extra": "mean: 2.0643958262000295 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 1.7241369530326744,
            "unit": "iter/sec",
            "range": "stddev: 0.07033763092972087",
            "extra": "mean: 580.000328999995 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.135167124807415,
            "unit": "iter/sec",
            "range": "stddev: 0.08463336060246465",
            "extra": "mean: 880.9275551999917 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.0815699408725306,
            "unit": "iter/sec",
            "range": "stddev: 0.0737720717458065",
            "extra": "mean: 924.5819084000004 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.1257628809840479,
            "unit": "iter/sec",
            "range": "stddev: 0.08122638756978015",
            "extra": "mean: 888.2865272000117 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 18.15752270114067,
            "unit": "iter/sec",
            "range": "stddev: 0.0044716089522446704",
            "extra": "mean: 55.07359216668798 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markdaoust@google.com",
            "name": "Mark Daoust",
            "username": "MarkDaoust"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ecd489310c3ab2edc6a2424bfcd8a9344570f53",
          "message": "Fix docstring. (#1305)\n\nThis is breaking everything below it.\r\n\r\nhttps://www.tensorflow.org/io/api_docs/python/tfio/experimental/IODataset",
          "timestamp": "2021-02-08T22:45:14+05:30",
          "tree_id": "201cedf70d8a32bd8f30a517cae65520ab458e15",
          "url": "https://github.com/tensorflow/io/commit/3ecd489310c3ab2edc6a2424bfcd8a9344570f53"
        },
        "date": 1612806214122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3667.9698370186206,
            "unit": "iter/sec",
            "range": "stddev: 0.00008104552022806429",
            "extra": "mean: 272.6303771387647 usec\nrounds: 1286"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3299.2258358238946,
            "unit": "iter/sec",
            "range": "stddev: 0.00007255217976709457",
            "extra": "mean: 303.1014091674862 usec\nrounds: 2378"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 889.3610896668458,
            "unit": "iter/sec",
            "range": "stddev: 0.0002206084222278196",
            "extra": "mean: 1.124402688197883 msec\nrounds: 805"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 474.1244112223941,
            "unit": "iter/sec",
            "range": "stddev: 0.00040198306734124403",
            "extra": "mean: 2.1091510505054702 msec\nrounds: 396"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1369.1366539503815,
            "unit": "iter/sec",
            "range": "stddev: 0.00017028185665684682",
            "extra": "mean: 730.3872824635084 usec\nrounds: 1055"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 491.4589146964034,
            "unit": "iter/sec",
            "range": "stddev: 0.0002986467618391757",
            "extra": "mean: 2.0347580847480318 msec\nrounds: 236"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 849.315405660962,
            "unit": "iter/sec",
            "range": "stddev: 0.00018570792311082784",
            "extra": "mean: 1.1774188874176499 msec\nrounds: 604"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.3398363063398624,
            "unit": "iter/sec",
            "range": "stddev: 0.03995301472304555",
            "extra": "mean: 299.4158719999973 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 27.637739168012388,
            "unit": "iter/sec",
            "range": "stddev: 0.002016090771256967",
            "extra": "mean: 36.18240963636377 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.8730115330538235,
            "unit": "iter/sec",
            "range": "stddev: 0.06507743119687735",
            "extra": "mean: 1.145460239800002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.8677785561207492,
            "unit": "iter/sec",
            "range": "stddev: 0.048709836190894834",
            "extra": "mean: 1.1523677244000168 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.8452501126137766,
            "unit": "iter/sec",
            "range": "stddev: 0.07283393796349427",
            "extra": "mean: 1.1830817707999928 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.3876103147182725,
            "unit": "iter/sec",
            "range": "stddev: 0.060025992322294726",
            "extra": "mean: 2.5799107041999947 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.289743826304267,
            "unit": "iter/sec",
            "range": "stddev: 0.18294694926755942",
            "extra": "mean: 3.451324615800013 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6444425295994585,
            "unit": "iter/sec",
            "range": "stddev: 0.033009724638075104",
            "extra": "mean: 1.5517287486000213 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.2142734225060017,
            "unit": "iter/sec",
            "range": "stddev: 0.05201427968225024",
            "extra": "mean: 451.6154101999973 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.41682029353005,
            "unit": "iter/sec",
            "range": "stddev: 0.06420670858432691",
            "extra": "mean: 705.8058136000227 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.4643471541293067,
            "unit": "iter/sec",
            "range": "stddev: 0.05398009500210791",
            "extra": "mean: 682.8981756000303 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.403083827955582,
            "unit": "iter/sec",
            "range": "stddev: 0.06301127795819907",
            "extra": "mean: 712.7157907999617 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 21.41767140737941,
            "unit": "iter/sec",
            "range": "stddev: 0.004536287384590501",
            "extra": "mean: 46.69041657140432 msec\nrounds: 7"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markdaoust@google.com",
            "name": "Mark Daoust",
            "username": "MarkDaoust"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ecd489310c3ab2edc6a2424bfcd8a9344570f53",
          "message": "Fix docstring. (#1305)\n\nThis is breaking everything below it.\r\n\r\nhttps://www.tensorflow.org/io/api_docs/python/tfio/experimental/IODataset",
          "timestamp": "2021-02-08T22:45:14+05:30",
          "tree_id": "201cedf70d8a32bd8f30a517cae65520ab458e15",
          "url": "https://github.com/tensorflow/io/commit/3ecd489310c3ab2edc6a2424bfcd8a9344570f53"
        },
        "date": 1612806277211,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3680.881778135144,
            "unit": "iter/sec",
            "range": "stddev: 0.00004832354972354221",
            "extra": "mean: 271.6740336351234 usec\nrounds: 1219"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2934.4909524562254,
            "unit": "iter/sec",
            "range": "stddev: 0.00007922056231839387",
            "extra": "mean: 340.77460663594167 usec\nrounds: 2471"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 800.5096335426429,
            "unit": "iter/sec",
            "range": "stddev: 0.0003276946399910267",
            "extra": "mean: 1.2492042045446918 msec\nrounds: 792"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 478.0379571698399,
            "unit": "iter/sec",
            "range": "stddev: 0.0001796734614473613",
            "extra": "mean: 2.091884096234464 msec\nrounds: 478"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1331.089085413432,
            "unit": "iter/sec",
            "range": "stddev: 0.00020513816490613085",
            "extra": "mean: 751.2645178736502 usec\nrounds: 1147"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 505.91631296150314,
            "unit": "iter/sec",
            "range": "stddev: 0.00008864185130109037",
            "extra": "mean: 1.9766114955777148 msec\nrounds: 226"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 881.3629486351638,
            "unit": "iter/sec",
            "range": "stddev: 0.0001431902825879517",
            "extra": "mean: 1.134606352069317 msec\nrounds: 676"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 2.5859746528433707,
            "unit": "iter/sec",
            "range": "stddev: 0.055348477387866385",
            "extra": "mean: 386.7013927999892 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 23.221332974180516,
            "unit": "iter/sec",
            "range": "stddev: 0.0015995867749814827",
            "extra": "mean: 43.063849999992954 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7173181552675673,
            "unit": "iter/sec",
            "range": "stddev: 0.11168666252924699",
            "extra": "mean: 1.3940815419999921 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.7487838018372417,
            "unit": "iter/sec",
            "range": "stddev: 0.05501116147925491",
            "extra": "mean: 1.335498975200005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7231871286622575,
            "unit": "iter/sec",
            "range": "stddev: 0.10007830396206828",
            "extra": "mean: 1.382767973 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.3830958538595604,
            "unit": "iter/sec",
            "range": "stddev: 0.06941731062697062",
            "extra": "mean: 2.610312771400004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.2819294102694306,
            "unit": "iter/sec",
            "range": "stddev: 0.1543974182600567",
            "extra": "mean: 3.546987166199983 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5563752577827306,
            "unit": "iter/sec",
            "range": "stddev: 0.04401425847511416",
            "extra": "mean: 1.7973480776000088 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.06055671809027,
            "unit": "iter/sec",
            "range": "stddev: 0.058311864978663315",
            "extra": "mean: 485.3057386000046 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.2424006680899518,
            "unit": "iter/sec",
            "range": "stddev: 0.08808355630053429",
            "extra": "mean: 804.8933211999838 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.2932654316664716,
            "unit": "iter/sec",
            "range": "stddev: 0.07848225825540613",
            "extra": "mean: 773.2364722000057 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.2425821501931038,
            "unit": "iter/sec",
            "range": "stddev: 0.07709060961256739",
            "extra": "mean: 804.7757646000264 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 20.614845178803222,
            "unit": "iter/sec",
            "range": "stddev: 0.001229690832684148",
            "extra": "mean: 48.5087319999972 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf8585ae895bf84120b00af778d9067e22550170",
          "message": "Switch to use github to download libgeotiff (#1307)\n\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-09T12:37:34+05:30",
          "tree_id": "979aafab37c80cd6133a45c5f5a7e969dc886711",
          "url": "https://github.com/tensorflow/io/commit/bf8585ae895bf84120b00af778d9067e22550170"
        },
        "date": 1612855058288,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3736.817542012058,
            "unit": "iter/sec",
            "range": "stddev: 0.000018409081375252375",
            "extra": "mean: 267.6073928569599 usec\nrounds: 1316"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2926.220605018046,
            "unit": "iter/sec",
            "range": "stddev: 0.00006972605647741677",
            "extra": "mean: 341.73773442957247 usec\nrounds: 2312"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 846.6352254879215,
            "unit": "iter/sec",
            "range": "stddev: 0.0000970371179665376",
            "extra": "mean: 1.1811462243656272 msec\nrounds: 829"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 472.4103075054358,
            "unit": "iter/sec",
            "range": "stddev: 0.00009887590196914199",
            "extra": "mean: 2.116803939525586 msec\nrounds: 463"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1334.3627650007381,
            "unit": "iter/sec",
            "range": "stddev: 0.000054904436262418695",
            "extra": "mean: 749.4213914155846 usec\nrounds: 1165"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 504.6133471962003,
            "unit": "iter/sec",
            "range": "stddev: 0.00008433767625818296",
            "extra": "mean: 1.9817153183845269 msec\nrounds: 223"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 833.7642436658026,
            "unit": "iter/sec",
            "range": "stddev: 0.00038899419518294694",
            "extra": "mean: 1.199379809816874 msec\nrounds: 652"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 2.9723569937596928,
            "unit": "iter/sec",
            "range": "stddev: 0.04165102655877059",
            "extra": "mean: 336.4333429999988 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 25.086839222870434,
            "unit": "iter/sec",
            "range": "stddev: 0.0016782570994308215",
            "extra": "mean: 39.86153820001164 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7685206811869724,
            "unit": "iter/sec",
            "range": "stddev: 0.04987053445990196",
            "extra": "mean: 1.3012011575999622 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.7720361793336084,
            "unit": "iter/sec",
            "range": "stddev: 0.039030703182751716",
            "extra": "mean: 1.2952760851999983 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.758787012848367,
            "unit": "iter/sec",
            "range": "stddev: 0.05491612626979904",
            "extra": "mean: 1.3178928777999999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.3783310600832417,
            "unit": "iter/sec",
            "range": "stddev: 0.04045719956573606",
            "extra": "mean: 2.6431876879999665 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.28690003254824187,
            "unit": "iter/sec",
            "range": "stddev: 0.09556161060861727",
            "extra": "mean: 3.485534634199985 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6140057101529023,
            "unit": "iter/sec",
            "range": "stddev: 0.05181089128540781",
            "extra": "mean: 1.6286493487999905 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.2184491499683467,
            "unit": "iter/sec",
            "range": "stddev: 0.04812543211823378",
            "extra": "mean: 450.76534660001926 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.3790999466766196,
            "unit": "iter/sec",
            "range": "stddev: 0.06632653469012569",
            "extra": "mean: 725.1106074000063 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.3960012963993966,
            "unit": "iter/sec",
            "range": "stddev: 0.057645458889703335",
            "extra": "mean: 716.3317129999996 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.3402586804598209,
            "unit": "iter/sec",
            "range": "stddev: 0.0549880752006556",
            "extra": "mean: 746.1246209999672 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 22.008143548650796,
            "unit": "iter/sec",
            "range": "stddev: 0.0010618272416354844",
            "extra": "mean: 45.43772616665365 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf8585ae895bf84120b00af778d9067e22550170",
          "message": "Switch to use github to download libgeotiff (#1307)\n\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-09T12:37:34+05:30",
          "tree_id": "979aafab37c80cd6133a45c5f5a7e969dc886711",
          "url": "https://github.com/tensorflow/io/commit/bf8585ae895bf84120b00af778d9067e22550170"
        },
        "date": 1612855095209,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3519.3556071320504,
            "unit": "iter/sec",
            "range": "stddev: 0.00011202559948937955",
            "extra": "mean: 284.1429260440401 usec\nrounds: 933"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2837.705886858017,
            "unit": "iter/sec",
            "range": "stddev: 0.00007816717340401939",
            "extra": "mean: 352.39733780417475 usec\nrounds: 2087"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 781.4474045961415,
            "unit": "iter/sec",
            "range": "stddev: 0.0002363022542446113",
            "extra": "mean: 1.2796766540120614 msec\nrounds: 711"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 442.5393230599554,
            "unit": "iter/sec",
            "range": "stddev: 0.00031391418401100076",
            "extra": "mean: 2.2596861971168147 msec\nrounds: 416"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1232.036261711925,
            "unit": "iter/sec",
            "range": "stddev: 0.0001394275560474869",
            "extra": "mean: 811.6644218007767 usec\nrounds: 1055"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 424.63013846360354,
            "unit": "iter/sec",
            "range": "stddev: 0.0007205789552859478",
            "extra": "mean: 2.3549906363646236 msec\nrounds: 176"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 801.5756208194578,
            "unit": "iter/sec",
            "range": "stddev: 0.00011231185967264832",
            "extra": "mean: 1.2475429317294997 msec\nrounds: 498"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 2.676400386583504,
            "unit": "iter/sec",
            "range": "stddev: 0.06546427059764533",
            "extra": "mean: 373.6361738000369 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 17.534780051144292,
            "unit": "iter/sec",
            "range": "stddev: 0.004935695918703483",
            "extra": "mean: 57.02951488888175 msec\nrounds: 9"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7170343654481542,
            "unit": "iter/sec",
            "range": "stddev: 0.0797372814380876",
            "extra": "mean: 1.39463329539999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.7187925566568976,
            "unit": "iter/sec",
            "range": "stddev: 0.10593478973979539",
            "extra": "mean: 1.3912219746000118 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7273831850910812,
            "unit": "iter/sec",
            "range": "stddev: 0.08393286324191726",
            "extra": "mean: 1.3747911974000089 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.3334479386117846,
            "unit": "iter/sec",
            "range": "stddev: 0.09804704154875869",
            "extra": "mean: 2.9989689070000396 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.27073479855960825,
            "unit": "iter/sec",
            "range": "stddev: 0.13880915023981846",
            "extra": "mean: 3.693651519199989 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5447697143966551,
            "unit": "iter/sec",
            "range": "stddev: 0.07150157129180972",
            "extra": "mean: 1.8356380202000082 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.0899260800420087,
            "unit": "iter/sec",
            "range": "stddev: 0.07635383877713717",
            "extra": "mean: 478.4858227999621 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.3169404709917898,
            "unit": "iter/sec",
            "range": "stddev: 0.0865072770954675",
            "extra": "mean: 759.3357649999916 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.2242712501082418,
            "unit": "iter/sec",
            "range": "stddev: 0.07732155220444525",
            "extra": "mean: 816.8124505999685 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.2685061158502826,
            "unit": "iter/sec",
            "range": "stddev: 0.09729367403873859",
            "extra": "mean: 788.3288756000184 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 16.881506343569548,
            "unit": "iter/sec",
            "range": "stddev: 0.003691051797112681",
            "extra": "mean: 59.23641999997926 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6cead09528862b0663cb0efd980aa096f551115",
          "message": "Add @com_google_absl//absl/strings:cord (#1308)\n\nFix read/STDIN_FILENO\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-09T11:04:01-08:00",
          "tree_id": "81675ef5f963a1407e6a225894120f477744793e",
          "url": "https://github.com/tensorflow/io/commit/f6cead09528862b0663cb0efd980aa096f551115"
        },
        "date": 1612897902453,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3456.924716785792,
            "unit": "iter/sec",
            "range": "stddev: 0.00009487859687742828",
            "extra": "mean: 289.2744511167105 usec\nrounds: 1299"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2784.301702860291,
            "unit": "iter/sec",
            "range": "stddev: 0.00009696753282004015",
            "extra": "mean: 359.15648041040527 usec\nrounds: 2144"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 787.0708939024133,
            "unit": "iter/sec",
            "range": "stddev: 0.0002087137605547939",
            "extra": "mean: 1.2705335793092956 msec\nrounds: 725"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 471.4235740183975,
            "unit": "iter/sec",
            "range": "stddev: 0.00041278861023665925",
            "extra": "mean: 2.1212346075017763 msec\nrounds: 400"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1329.4622634449036,
            "unit": "iter/sec",
            "range": "stddev: 0.0002026835438462974",
            "extra": "mean: 752.1838170936867 usec\nrounds: 1170"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 481.6755965733596,
            "unit": "iter/sec",
            "range": "stddev: 0.0002291024903405152",
            "extra": "mean: 2.076086077671363 msec\nrounds: 206"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 824.3682083341741,
            "unit": "iter/sec",
            "range": "stddev: 0.000238975259791584",
            "extra": "mean: 1.2130501757469887 msec\nrounds: 569"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 2.8194633825529447,
            "unit": "iter/sec",
            "range": "stddev: 0.06116260950231481",
            "extra": "mean: 354.67742059998955 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 22.69599666381859,
            "unit": "iter/sec",
            "range": "stddev: 0.0032513750986927835",
            "extra": "mean: 44.06063389999417 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7265085122817806,
            "unit": "iter/sec",
            "range": "stddev: 0.08328823202833564",
            "extra": "mean: 1.3764463637999937 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.7514501487600835,
            "unit": "iter/sec",
            "range": "stddev: 0.08493467920452225",
            "extra": "mean: 1.3307602662000022 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7512482334221297,
            "unit": "iter/sec",
            "range": "stddev: 0.08274242521710351",
            "extra": "mean: 1.3311179387999914 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.3432464474859377,
            "unit": "iter/sec",
            "range": "stddev: 0.0980206863053139",
            "extra": "mean: 2.9133586300000047 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.2726944998461383,
            "unit": "iter/sec",
            "range": "stddev: 0.15224085660332987",
            "extra": "mean: 3.667107332799992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5694985250463163,
            "unit": "iter/sec",
            "range": "stddev: 0.07573780379955887",
            "extra": "mean: 1.7559307988000001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.0904745170992025,
            "unit": "iter/sec",
            "range": "stddev: 0.06090192511709426",
            "extra": "mean: 478.3602917999815 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.2582211373288414,
            "unit": "iter/sec",
            "range": "stddev: 0.06679642796639738",
            "extra": "mean: 794.7728505999862 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.3249566945920606,
            "unit": "iter/sec",
            "range": "stddev: 0.08260455106520548",
            "extra": "mean: 754.7416485999861 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.2373590168572464,
            "unit": "iter/sec",
            "range": "stddev: 0.07291713215198174",
            "extra": "mean: 808.1728797999858 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 19.145955898497068,
            "unit": "iter/sec",
            "range": "stddev: 0.0021702712893370813",
            "extra": "mean: 52.23035116666589 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6cead09528862b0663cb0efd980aa096f551115",
          "message": "Add @com_google_absl//absl/strings:cord (#1308)\n\nFix read/STDIN_FILENO\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-09T11:04:01-08:00",
          "tree_id": "81675ef5f963a1407e6a225894120f477744793e",
          "url": "https://github.com/tensorflow/io/commit/f6cead09528862b0663cb0efd980aa096f551115"
        },
        "date": 1612897966890,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 6956.7973595653875,
            "unit": "iter/sec",
            "range": "stddev: 0.00000943098823971694",
            "extra": "mean: 143.74430478775267 usec\nrounds: 1483"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4982.178123538106,
            "unit": "iter/sec",
            "range": "stddev: 0.000008125629330038082",
            "extra": "mean: 200.71542510203298 usec\nrounds: 3211"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1203.8508931157542,
            "unit": "iter/sec",
            "range": "stddev: 0.000008707857432529942",
            "extra": "mean: 830.66765636718 usec\nrounds: 1068"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 578.9266921053752,
            "unit": "iter/sec",
            "range": "stddev: 0.000057267358129282874",
            "extra": "mean: 1.7273344166656281 msec\nrounds: 576"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1905.8001218546729,
            "unit": "iter/sec",
            "range": "stddev: 0.000018449087235479405",
            "extra": "mean: 524.713997303572 usec\nrounds: 1483"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 866.1246683972831,
            "unit": "iter/sec",
            "range": "stddev: 0.000016489724341590066",
            "extra": "mean: 1.1545682007307863 msec\nrounds: 274"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1437.034197719834,
            "unit": "iter/sec",
            "range": "stddev: 0.000014364425585298116",
            "extra": "mean: 695.877663584288 usec\nrounds: 865"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 4.081312091816968,
            "unit": "iter/sec",
            "range": "stddev: 0.04993844297620198",
            "extra": "mean: 245.01924319999944 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 31.2114788078578,
            "unit": "iter/sec",
            "range": "stddev: 0.0009700555870210772",
            "extra": "mean: 32.03949438461852 msec\nrounds: 13"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.5831060847872758,
            "unit": "iter/sec",
            "range": "stddev: 0.06356074531064572",
            "extra": "mean: 631.6696080000042 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.4208528581415345,
            "unit": "iter/sec",
            "range": "stddev: 0.06319193166264823",
            "extra": "mean: 703.8026452000054 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.55882149401267,
            "unit": "iter/sec",
            "range": "stddev: 0.06598101669185988",
            "extra": "mean: 641.5102716000092 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5556434951524325,
            "unit": "iter/sec",
            "range": "stddev: 0.06825565113100547",
            "extra": "mean: 1.7997151208000104 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.4228172052245724,
            "unit": "iter/sec",
            "range": "stddev: 0.07735208166685452",
            "extra": "mean: 2.3650882406000164 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.8435458522240753,
            "unit": "iter/sec",
            "range": "stddev: 0.046889766167197755",
            "extra": "mean: 1.185472013599997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 4.261433184890259,
            "unit": "iter/sec",
            "range": "stddev: 0.06269844422169218",
            "extra": "mean: 234.66283679999833 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.4640703698125117,
            "unit": "iter/sec",
            "range": "stddev: 0.07200432021384469",
            "extra": "mean: 405.8325656000193 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.229325095716823,
            "unit": "iter/sec",
            "range": "stddev: 0.07930872738583167",
            "extra": "mean: 448.5662507999791 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.1617290834608536,
            "unit": "iter/sec",
            "range": "stddev: 0.07136191503712988",
            "extra": "mean: 462.5926568000068 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 26.496033623257865,
            "unit": "iter/sec",
            "range": "stddev: 0.0018254244649686755",
            "extra": "mean: 37.74149799999549 msec\nrounds: 8"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b6ccb7dfd49646f6c1ad84072a74a541070214c",
          "message": "Switch to modular file system for hdfs (#1309)\n\n* Switch to modular file system for hdfs\r\n\r\nThis PR is part of the effort to switch to modular file system for hdfs.\r\nWhen TF_ENABLE_LEGACY_FILESYSTEM=1 is provided, old behavior will\r\nbe preserved.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Build against tf-nightly\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Update tests\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Adjust the if else logic, follow review comment\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-11T14:42:26-08:00",
          "tree_id": "07a3203d556a297b1c16a5a3b1d750f795f3df47",
          "url": "https://github.com/tensorflow/io/commit/9b6ccb7dfd49646f6c1ad84072a74a541070214c"
        },
        "date": 1613084219474,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 2.9976223734638734,
            "unit": "iter/sec",
            "range": "stddev: 0.02133715880089076",
            "extra": "mean: 333.5977236000076 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 23.951329882144922,
            "unit": "iter/sec",
            "range": "stddev: 0.0011807371637717566",
            "extra": "mean: 41.75133509999682 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7620076139477674,
            "unit": "iter/sec",
            "range": "stddev: 0.07240436823965227",
            "extra": "mean: 1.3123228452000035 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.767067883850082,
            "unit": "iter/sec",
            "range": "stddev: 0.059197126132540336",
            "extra": "mean: 1.3036655830000086 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7448594551121783,
            "unit": "iter/sec",
            "range": "stddev: 0.06715153686784078",
            "extra": "mean: 1.3425351495999962 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.3560656969374232,
            "unit": "iter/sec",
            "range": "stddev: 0.09973040945011714",
            "extra": "mean: 2.8084704833999923 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.2768640621402527,
            "unit": "iter/sec",
            "range": "stddev: 0.09705655530612013",
            "extra": "mean: 3.6118808351999974 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5537908262643738,
            "unit": "iter/sec",
            "range": "stddev: 0.01635125962146453",
            "extra": "mean: 1.8057359431999884 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.010473127910172,
            "unit": "iter/sec",
            "range": "stddev: 0.06152993653623308",
            "extra": "mean: 497.395357400012 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.3169002894749648,
            "unit": "iter/sec",
            "range": "stddev: 0.07436822994963777",
            "extra": "mean: 759.3589339999994 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.2947534813311528,
            "unit": "iter/sec",
            "range": "stddev: 0.07332361301913264",
            "extra": "mean: 772.3477978000005 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.231766381508965,
            "unit": "iter/sec",
            "range": "stddev: 0.07920585870496116",
            "extra": "mean: 811.842257599983 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 19.694181851241474,
            "unit": "iter/sec",
            "range": "stddev: 0.0016563091102038412",
            "extra": "mean: 50.77641750002234 msec\nrounds: 6"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3409.6333598522046,
            "unit": "iter/sec",
            "range": "stddev: 0.00007765772858852659",
            "extra": "mean: 293.2866658846118 usec\nrounds: 2134"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2696.304181468771,
            "unit": "iter/sec",
            "range": "stddev: 0.00020403801916977598",
            "extra": "mean: 370.8780362663923 usec\nrounds: 2206"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 811.7361573878513,
            "unit": "iter/sec",
            "range": "stddev: 0.0002147689101115768",
            "extra": "mean: 1.2319273829294206 msec\nrounds: 820"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 452.7778110863392,
            "unit": "iter/sec",
            "range": "stddev: 0.0004409565871906926",
            "extra": "mean: 2.2085887945805545 msec\nrounds: 443"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1282.0343194139095,
            "unit": "iter/sec",
            "range": "stddev: 0.00019524591576723096",
            "extra": "mean: 780.0103202051226 usec\nrounds: 1168"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 452.7704197874907,
            "unit": "iter/sec",
            "range": "stddev: 0.0004903005461532007",
            "extra": "mean: 2.2086248489231104 msec\nrounds: 278"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 799.6137550978993,
            "unit": "iter/sec",
            "range": "stddev: 0.00024917525697065675",
            "extra": "mean: 1.2506037991774752 msec\nrounds: 244"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b6ccb7dfd49646f6c1ad84072a74a541070214c",
          "message": "Switch to modular file system for hdfs (#1309)\n\n* Switch to modular file system for hdfs\r\n\r\nThis PR is part of the effort to switch to modular file system for hdfs.\r\nWhen TF_ENABLE_LEGACY_FILESYSTEM=1 is provided, old behavior will\r\nbe preserved.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Build against tf-nightly\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Update tests\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Adjust the if else logic, follow review comment\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-11T14:42:26-08:00",
          "tree_id": "07a3203d556a297b1c16a5a3b1d750f795f3df47",
          "url": "https://github.com/tensorflow/io/commit/9b6ccb7dfd49646f6c1ad84072a74a541070214c"
        },
        "date": 1613084384797,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 4.4913246838960825,
            "unit": "iter/sec",
            "range": "stddev: 0.017520272951156383",
            "extra": "mean: 222.65146039999308 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 31.92351148538303,
            "unit": "iter/sec",
            "range": "stddev: 0.0020529634316161934",
            "extra": "mean: 31.324874785716315 msec\nrounds: 14"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.4355609348193057,
            "unit": "iter/sec",
            "range": "stddev: 0.043860284421423416",
            "extra": "mean: 696.5918170000009 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.4530517963448457,
            "unit": "iter/sec",
            "range": "stddev: 0.04648221838014217",
            "extra": "mean: 688.2067125999924 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.4453436751936442,
            "unit": "iter/sec",
            "range": "stddev: 0.05875616042110881",
            "extra": "mean: 691.8769681999834 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5530171927539418,
            "unit": "iter/sec",
            "range": "stddev: 0.04960854045451589",
            "extra": "mean: 1.80826204519999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.4134362352011181,
            "unit": "iter/sec",
            "range": "stddev: 0.04915650868116708",
            "extra": "mean: 2.4187526753999804 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.8144215963708425,
            "unit": "iter/sec",
            "range": "stddev: 0.06584555143801396",
            "extra": "mean: 1.2278652782000337 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 4.106025197963926,
            "unit": "iter/sec",
            "range": "stddev: 0.04623058955832426",
            "extra": "mean: 243.54453559999456 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.325046628135893,
            "unit": "iter/sec",
            "range": "stddev: 0.08224572385893222",
            "extra": "mean: 430.09890119999454 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 2.2496610956424767,
            "unit": "iter/sec",
            "range": "stddev: 0.06736885751305309",
            "extra": "mean: 444.51139859997966 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.1924042114527373,
            "unit": "iter/sec",
            "range": "stddev: 0.05461878020236348",
            "extra": "mean: 456.12026960000094 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 27.484653403901035,
            "unit": "iter/sec",
            "range": "stddev: 0.0017126064936446327",
            "extra": "mean: 36.38394071427748 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 6083.168385374591,
            "unit": "iter/sec",
            "range": "stddev: 0.00003180813851450731",
            "extra": "mean: 164.38801898106948 usec\nrounds: 2160"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 4268.0958686905715,
            "unit": "iter/sec",
            "range": "stddev: 0.00006019602627655781",
            "extra": "mean: 234.29651787713814 usec\nrounds: 2881"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 956.0582020709531,
            "unit": "iter/sec",
            "range": "stddev: 0.00020476818276279305",
            "extra": "mean: 1.0459614256055363 msec\nrounds: 867"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 570.1597309502855,
            "unit": "iter/sec",
            "range": "stddev: 0.0002454995683137573",
            "extra": "mean: 1.753894471525198 msec\nrounds: 439"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1676.4293791095183,
            "unit": "iter/sec",
            "range": "stddev: 0.00011778513913780056",
            "extra": "mean: 596.5058907111122 usec\nrounds: 1098"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 758.1576950813214,
            "unit": "iter/sec",
            "range": "stddev: 0.00023125245985946977",
            "extra": "mean: 1.318986810379519 msec\nrounds: 501"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1284.808523409952,
            "unit": "iter/sec",
            "range": "stddev: 0.0001194536271587758",
            "extra": "mean: 778.3260943396807 usec\nrounds: 583"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63730b527b1b1a70c362e2ee02459a1a6dacd6ea",
          "message": "Disable test_write_kafka test for now. (#1310)\n\nWith tensorflow upgrade to tf-nightly, the test_write_kafka test\r\nis failing and that is block the plan to modular file system migration.\r\n\r\nThis PR disables the test temporarily so that CI can continue\r\nto push tensorflow-io-nightly image (needed for modular file system migration)\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-12T11:57:59+05:30",
          "tree_id": "9e99d6d7fd873cb344833e04c00e3277a056cee0",
          "url": "https://github.com/tensorflow/io/commit/63730b527b1b1a70c362e2ee02459a1a6dacd6ea"
        },
        "date": 1613111752924,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.4642960259854796,
            "unit": "iter/sec",
            "range": "stddev: 0.011531420461862415",
            "extra": "mean: 288.65893460000507 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 25.84584802217638,
            "unit": "iter/sec",
            "range": "stddev: 0.003420372723471258",
            "extra": "mean: 38.690933999997796 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.8124548901788552,
            "unit": "iter/sec",
            "range": "stddev: 0.09873316441032029",
            "extra": "mean: 1.2308375665999847 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.8234656913888582,
            "unit": "iter/sec",
            "range": "stddev: 0.08108148083995852",
            "extra": "mean: 1.2143796766000037 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.839603348547647,
            "unit": "iter/sec",
            "range": "stddev: 0.06882989532197213",
            "extra": "mean: 1.191038603800007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.41649206212247797,
            "unit": "iter/sec",
            "range": "stddev: 0.08777263819701019",
            "extra": "mean: 2.401006143799998 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.328547188046367,
            "unit": "iter/sec",
            "range": "stddev: 0.09018291404433013",
            "extra": "mean: 3.0437028115999967 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7083447537751004,
            "unit": "iter/sec",
            "range": "stddev: 0.04306109095863423",
            "extra": "mean: 1.4117419444000006 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.420606878096402,
            "unit": "iter/sec",
            "range": "stddev: 0.04302739561081923",
            "extra": "mean: 413.11953999999105 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.6025811469391198,
            "unit": "iter/sec",
            "range": "stddev: 0.06140638461135192",
            "extra": "mean: 623.9933634000181 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.6130573914251238,
            "unit": "iter/sec",
            "range": "stddev: 0.05574151029192812",
            "extra": "mean: 619.9407443999917 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.517836740366688,
            "unit": "iter/sec",
            "range": "stddev: 0.05650387887947296",
            "extra": "mean: 658.8323852000144 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 21.664074307424208,
            "unit": "iter/sec",
            "range": "stddev: 0.003627774433769692",
            "extra": "mean: 46.15936900000861 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 4041.5978415911404,
            "unit": "iter/sec",
            "range": "stddev: 0.00006488565566688413",
            "extra": "mean: 247.42689381640926 usec\nrounds: 2345"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2974.316406279695,
            "unit": "iter/sec",
            "range": "stddev: 0.00008818731318667054",
            "extra": "mean: 336.2117083067198 usec\nrounds: 1577"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 931.5058658200106,
            "unit": "iter/sec",
            "range": "stddev: 0.00017966756345707226",
            "extra": "mean: 1.073530545209926 msec\nrounds: 741"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 551.5634674489669,
            "unit": "iter/sec",
            "range": "stddev: 0.00027957271063666595",
            "extra": "mean: 1.813027981394588 msec\nrounds: 430"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1582.6914515951448,
            "unit": "iter/sec",
            "range": "stddev: 0.00011798051492988476",
            "extra": "mean: 631.8350926784444 usec\nrounds: 1543"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 568.9826296628733,
            "unit": "iter/sec",
            "range": "stddev: 0.00033480501971624256",
            "extra": "mean: 1.7575228976542008 msec\nrounds: 342"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 853.3971637135852,
            "unit": "iter/sec",
            "range": "stddev: 0.00032646782169980937",
            "extra": "mean: 1.1717873488686883 msec\nrounds: 708"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63730b527b1b1a70c362e2ee02459a1a6dacd6ea",
          "message": "Disable test_write_kafka test for now. (#1310)\n\nWith tensorflow upgrade to tf-nightly, the test_write_kafka test\r\nis failing and that is block the plan to modular file system migration.\r\n\r\nThis PR disables the test temporarily so that CI can continue\r\nto push tensorflow-io-nightly image (needed for modular file system migration)\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-12T11:57:59+05:30",
          "tree_id": "9e99d6d7fd873cb344833e04c00e3277a056cee0",
          "url": "https://github.com/tensorflow/io/commit/63730b527b1b1a70c362e2ee02459a1a6dacd6ea"
        },
        "date": 1613111836138,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.9606076662437575,
            "unit": "iter/sec",
            "range": "stddev: 0.008968019366455558",
            "extra": "mean: 252.48650819999057 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 30.392278862545766,
            "unit": "iter/sec",
            "range": "stddev: 0.0006334975017697458",
            "extra": "mean: 32.90309372728085 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.3607231374136604,
            "unit": "iter/sec",
            "range": "stddev: 0.045400503059337044",
            "extra": "mean: 734.9033557999974 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.360668744979948,
            "unit": "iter/sec",
            "range": "stddev: 0.0482477420544548",
            "extra": "mean: 734.9327333999554 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.3353547035477125,
            "unit": "iter/sec",
            "range": "stddev: 0.06267089326101054",
            "extra": "mean: 748.8647004000086 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5208657291741897,
            "unit": "iter/sec",
            "range": "stddev: 0.07473887942913236",
            "extra": "mean: 1.9198805833999812 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.403298203390254,
            "unit": "iter/sec",
            "range": "stddev: 0.06999697625207994",
            "extra": "mean: 2.4795548097999927 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7748011686180938,
            "unit": "iter/sec",
            "range": "stddev: 0.04165400312943373",
            "extra": "mean: 1.2906537064000076 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.7013315641720217,
            "unit": "iter/sec",
            "range": "stddev: 0.0517864196148288",
            "extra": "mean: 270.17303979998815 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.1309093535951833,
            "unit": "iter/sec",
            "range": "stddev: 0.05701144785883327",
            "extra": "mean: 469.28321860000324 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.9927355709536225,
            "unit": "iter/sec",
            "range": "stddev: 0.058438875373116116",
            "extra": "mean: 501.8227277999813 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 2.001661240314504,
            "unit": "iter/sec",
            "range": "stddev: 0.05743682067401764",
            "extra": "mean: 499.58503459999974 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 25.133499635253823,
            "unit": "iter/sec",
            "range": "stddev: 0.0013261707595521959",
            "extra": "mean: 39.78753514283134 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5525.183385056818,
            "unit": "iter/sec",
            "range": "stddev: 0.0000123979197508122",
            "extra": "mean: 180.98946773505446 usec\nrounds: 2371"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3948.577991415296,
            "unit": "iter/sec",
            "range": "stddev: 0.000026820386096765803",
            "extra": "mean: 253.25572957508385 usec\nrounds: 2448"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 911.3030051573165,
            "unit": "iter/sec",
            "range": "stddev: 0.00011034951288056182",
            "extra": "mean: 1.0973298610239652 msec\nrounds: 957"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 489.02878158986533,
            "unit": "iter/sec",
            "range": "stddev: 0.00008062973896336045",
            "extra": "mean: 2.044869418010394 msec\nrounds: 433"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1523.3685065279265,
            "unit": "iter/sec",
            "range": "stddev: 0.00005163668269010842",
            "extra": "mean: 656.4399852792072 usec\nrounds: 1019"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 680.8224411768814,
            "unit": "iter/sec",
            "range": "stddev: 0.00005996197344261118",
            "extra": "mean: 1.4688117481430003 msec\nrounds: 405"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1125.2673824852354,
            "unit": "iter/sec",
            "range": "stddev: 0.000032495496367874896",
            "extra": "mean: 888.6776739155334 usec\nrounds: 782"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a59fac2e93bd3a503154f1c14df9e4c33bb5de76",
          "message": "Modify --plat-name for macosx wheels (#1311)\n\n* modify --plat-name for macosx wheels\r\n\r\n* switch to 10.14",
          "timestamp": "2021-02-13T11:00:08-08:00",
          "tree_id": "1f24ca28d926349bfc975b9fc325d792a3895f45",
          "url": "https://github.com/tensorflow/io/commit/a59fac2e93bd3a503154f1c14df9e4c33bb5de76"
        },
        "date": 1613243321185,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.9634476462813524,
            "unit": "iter/sec",
            "range": "stddev: 0.004484694263704392",
            "extra": "mean: 252.3055908000288 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 29.217690564649228,
            "unit": "iter/sec",
            "range": "stddev: 0.0014096158323095988",
            "extra": "mean: 34.225839916653435 msec\nrounds: 12"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.3215674448035448,
            "unit": "iter/sec",
            "range": "stddev: 0.05853354669610799",
            "extra": "mean: 756.6772350000292 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.334333270588418,
            "unit": "iter/sec",
            "range": "stddev: 0.05066126163826231",
            "extra": "mean: 749.4379567999658 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.2709005327550311,
            "unit": "iter/sec",
            "range": "stddev: 0.048750858426817416",
            "extra": "mean: 786.8436389999943 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.506463469066001,
            "unit": "iter/sec",
            "range": "stddev: 0.0820732088000543",
            "extra": "mean: 1.9744760699999915 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.38956751863587435,
            "unit": "iter/sec",
            "range": "stddev: 0.03626716333503598",
            "extra": "mean: 2.5669491222000262 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7599295694113742,
            "unit": "iter/sec",
            "range": "stddev: 0.10906800681700822",
            "extra": "mean: 1.3159114216000034 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 4.020080756845727,
            "unit": "iter/sec",
            "range": "stddev: 0.0030803652531076397",
            "extra": "mean: 248.75122179998925 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.0350202872373213,
            "unit": "iter/sec",
            "range": "stddev: 0.06116657523704223",
            "extra": "mean: 491.39559259999714 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.9754555690441362,
            "unit": "iter/sec",
            "range": "stddev: 0.06928103699880644",
            "extra": "mean: 506.2123469999733 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.9877642321924713,
            "unit": "iter/sec",
            "range": "stddev: 0.058230094053990905",
            "extra": "mean: 503.0777713999897 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 25.250701208194812,
            "unit": "iter/sec",
            "range": "stddev: 0.000983067563495712",
            "extra": "mean: 39.602860599984524 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5491.373326809071,
            "unit": "iter/sec",
            "range": "stddev: 0.000011506010641623758",
            "extra": "mean: 182.10380909962288 usec\nrounds: 2352"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3935.8273305163207,
            "unit": "iter/sec",
            "range": "stddev: 0.000014205298849131682",
            "extra": "mean: 254.07618678963112 usec\nrounds: 2377"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 910.8405528102323,
            "unit": "iter/sec",
            "range": "stddev: 0.000043850080448636165",
            "extra": "mean: 1.0978869978007484 msec\nrounds: 909"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 487.61535333424763,
            "unit": "iter/sec",
            "range": "stddev: 0.00007554008338698751",
            "extra": "mean: 2.050796787185095 msec\nrounds: 437"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1527.2822004538211,
            "unit": "iter/sec",
            "range": "stddev: 0.00004100111968169024",
            "extra": "mean: 654.7578435097698 usec\nrounds: 1163"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 693.2740005869946,
            "unit": "iter/sec",
            "range": "stddev: 0.00004183514741607584",
            "extra": "mean: 1.4424311299043389 msec\nrounds: 408"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1169.730049958782,
            "unit": "iter/sec",
            "range": "stddev: 0.00003788996744390035",
            "extra": "mean: 854.8981023743361 usec\nrounds: 801"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac75e1c0b0c89f5d25db48a3c6218ceeee0c1c6a",
          "message": "Switch to modular file system for s3 (#1312)\n\nThis PR is part of the effort to switch to modular file system for s3.\r\nWhen TF_ENABLE_LEGACY_FILESYSTEM=1 is provided, old behavior will\r\nbe preserved.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-13T13:39:38-08:00",
          "tree_id": "1531710e9edff3bb2694fde1cf92be995173b0a0",
          "url": "https://github.com/tensorflow/io/commit/ac75e1c0b0c89f5d25db48a3c6218ceeee0c1c6a"
        },
        "date": 1613252956667,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.182482251005613,
            "unit": "iter/sec",
            "range": "stddev: 0.009224127132830906",
            "extra": "mean: 314.220134199968 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 22.76376174392576,
            "unit": "iter/sec",
            "range": "stddev: 0.0016370385045270891",
            "extra": "mean: 43.92947050005205 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7507865739797857,
            "unit": "iter/sec",
            "range": "stddev: 0.061173521926619845",
            "extra": "mean: 1.3319364445999327 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.7456198428122706,
            "unit": "iter/sec",
            "range": "stddev: 0.07826072196993172",
            "extra": "mean: 1.3411660239999492 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7466896065483898,
            "unit": "iter/sec",
            "range": "stddev: 0.06487332806171918",
            "extra": "mean: 1.3392445685999974 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.33907472732054433,
            "unit": "iter/sec",
            "range": "stddev: 0.15171050289161606",
            "extra": "mean: 2.9492024012000457 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.27015526356824066,
            "unit": "iter/sec",
            "range": "stddev: 0.07293628832700198",
            "extra": "mean: 3.7015751120000004 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5505617418008859,
            "unit": "iter/sec",
            "range": "stddev: 0.012250943319462478",
            "extra": "mean: 1.8163267152000118 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.061978695830084,
            "unit": "iter/sec",
            "range": "stddev: 0.05604712661712019",
            "extra": "mean: 484.9710629999663 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.297679326010281,
            "unit": "iter/sec",
            "range": "stddev: 0.06908057706243517",
            "extra": "mean: 770.6064047999462 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.2903595691768808,
            "unit": "iter/sec",
            "range": "stddev: 0.06032068630173467",
            "extra": "mean: 774.9777843999709 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.236119113519543,
            "unit": "iter/sec",
            "range": "stddev: 0.07608321504426117",
            "extra": "mean: 808.983526800057 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 18.58599687318464,
            "unit": "iter/sec",
            "range": "stddev: 0.0016442095143641788",
            "extra": "mean: 53.803947500000504 msec\nrounds: 6"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3280.119535543567,
            "unit": "iter/sec",
            "range": "stddev: 0.00023182233509714496",
            "extra": "mean: 304.8669382819564 usec\nrounds: 1993"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2805.645453791365,
            "unit": "iter/sec",
            "range": "stddev: 0.00007862136770849849",
            "extra": "mean: 356.4242226859654 usec\nrounds: 1931"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 782.895769199049,
            "unit": "iter/sec",
            "range": "stddev: 0.00016537786645631834",
            "extra": "mean: 1.277309240057667 msec\nrounds: 679"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 453.63750461460984,
            "unit": "iter/sec",
            "range": "stddev: 0.00014063955930886614",
            "extra": "mean: 2.20440327315872 msec\nrounds: 421"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1253.2265230866994,
            "unit": "iter/sec",
            "range": "stddev: 0.00023935825178246828",
            "extra": "mean: 797.9403416526791 usec\nrounds: 1162"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 453.945169966036,
            "unit": "iter/sec",
            "range": "stddev: 0.00017703565591044824",
            "extra": "mean: 2.2029092193553232 msec\nrounds: 310"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 788.7470406181965,
            "unit": "iter/sec",
            "range": "stddev: 0.00010751369371444204",
            "extra": "mean: 1.2678336000046728 msec\nrounds: 615"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4d95fa618f548898867c6d60fff1307991d6ef8",
          "message": "Update to enable python 3.9 building on Linux (#1314)\n\n* Update to enable python 3.9 building on Linux\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Switch to always use ubuntu:20.04\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-02-27T01:40:51+05:30",
          "tree_id": "e12a39ee302cf996aa44b5172e13c81dd7397640",
          "url": "https://github.com/tensorflow/io/commit/e4d95fa618f548898867c6d60fff1307991d6ef8"
        },
        "date": 1614370797477,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.7267537835162106,
            "unit": "iter/sec",
            "range": "stddev: 0.012045914557292878",
            "extra": "mean: 268.33004220002294 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 28.61847972332639,
            "unit": "iter/sec",
            "range": "stddev: 0.0017455236960560116",
            "extra": "mean: 34.942457100015645 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.3135044201650012,
            "unit": "iter/sec",
            "range": "stddev: 0.05132244408366059",
            "extra": "mean: 761.3221430000067 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.313223586163171,
            "unit": "iter/sec",
            "range": "stddev: 0.05005093323611466",
            "extra": "mean: 761.4849523999851 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.2385041883329924,
            "unit": "iter/sec",
            "range": "stddev: 0.05518713787546757",
            "extra": "mean: 807.4256101999822 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.4380157517321859,
            "unit": "iter/sec",
            "range": "stddev: 0.10044834720666718",
            "extra": "mean: 2.2830229188000204 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.358426910284103,
            "unit": "iter/sec",
            "range": "stddev: 0.222949010462989",
            "extra": "mean: 2.789969088000009 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6802877035367246,
            "unit": "iter/sec",
            "range": "stddev: 0.04924022990144589",
            "extra": "mean: 1.4699663021999867 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.926322610220266,
            "unit": "iter/sec",
            "range": "stddev: 0.05478290328245938",
            "extra": "mean: 341.72582220001004 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.0477433575372577,
            "unit": "iter/sec",
            "range": "stddev: 0.0643881095333691",
            "extra": "mean: 488.3424460000015 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.8260484215012756,
            "unit": "iter/sec",
            "range": "stddev: 0.05944916406123645",
            "extra": "mean: 547.6306040000054 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.8071204026547434,
            "unit": "iter/sec",
            "range": "stddev: 0.07093343782961697",
            "extra": "mean: 553.3665595999878 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 22.892893358742167,
            "unit": "iter/sec",
            "range": "stddev: 0.0025008359932222873",
            "extra": "mean: 43.68167816664936 msec\nrounds: 6"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5267.635659350053,
            "unit": "iter/sec",
            "range": "stddev: 0.000008698749551088534",
            "extra": "mean: 189.83849010608776 usec\nrounds: 2173"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3712.9297635493094,
            "unit": "iter/sec",
            "range": "stddev: 0.000015350690185939705",
            "extra": "mean: 269.32909149460124 usec\nrounds: 2328"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 877.835945189653,
            "unit": "iter/sec",
            "range": "stddev: 0.00002087360253139068",
            "extra": "mean: 1.1391650176548125 msec\nrounds: 793"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 467.42100731227004,
            "unit": "iter/sec",
            "range": "stddev: 0.00005036627115037001",
            "extra": "mean: 2.1393989237884847 msec\nrounds: 433"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1445.7343787525351,
            "unit": "iter/sec",
            "range": "stddev: 0.000043790338520922285",
            "extra": "mean: 691.6899913958323 usec\nrounds: 1046"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 660.8701870842391,
            "unit": "iter/sec",
            "range": "stddev: 0.00002063479614756342",
            "extra": "mean: 1.5131564708827347 msec\nrounds: 395"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1103.0469773149634,
            "unit": "iter/sec",
            "range": "stddev: 0.000016624622732496942",
            "extra": "mean: 906.5797020125104 usec\nrounds: 745"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "759875273cab3843c59f23a5599742fe768a9052",
          "message": "Add python 3.9 on Windows (#1316)",
          "timestamp": "2021-02-27T09:35:07-08:00",
          "tree_id": "10715e3960af940dc63029becad3efdcecf103a6",
          "url": "https://github.com/tensorflow/io/commit/759875273cab3843c59f23a5599742fe768a9052"
        },
        "date": 1614447840359,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.1056749550614557,
            "unit": "iter/sec",
            "range": "stddev: 0.018655422398104308",
            "extra": "mean: 321.9911982000099 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 21.854927246456267,
            "unit": "iter/sec",
            "range": "stddev: 0.003845718975969939",
            "extra": "mean: 45.75627219999774 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7356723957409048,
            "unit": "iter/sec",
            "range": "stddev: 0.05749777300192266",
            "extra": "mean: 1.359300696599996 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.7347488007016416,
            "unit": "iter/sec",
            "range": "stddev: 0.029493836486412375",
            "extra": "mean: 1.361009366799999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7178911760625798,
            "unit": "iter/sec",
            "range": "stddev: 0.06510499528575872",
            "extra": "mean: 1.3929687859999944 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.3593796612081131,
            "unit": "iter/sec",
            "range": "stddev: 0.052205730609073665",
            "extra": "mean: 2.7825726047999977 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.27708643447016235,
            "unit": "iter/sec",
            "range": "stddev: 0.07718839824144354",
            "extra": "mean: 3.6089821643999813 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5536349945905438,
            "unit": "iter/sec",
            "range": "stddev: 0.02267036749126837",
            "extra": "mean: 1.8062442037999744 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 1.9977994742236935,
            "unit": "iter/sec",
            "range": "stddev: 0.06257836676700328",
            "extra": "mean: 500.550737399999 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.2770396222427471,
            "unit": "iter/sec",
            "range": "stddev: 0.05616206865890659",
            "extra": "mean: 783.0610598000021 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.3069327863977442,
            "unit": "iter/sec",
            "range": "stddev: 0.06698713951275785",
            "extra": "mean: 765.1502896000238 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.2887093486746382,
            "unit": "iter/sec",
            "range": "stddev: 0.0605609762370864",
            "extra": "mean: 775.9701603999702 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 20.97727612439451,
            "unit": "iter/sec",
            "range": "stddev: 0.0006590306006911518",
            "extra": "mean: 47.670631500011496 msec\nrounds: 6"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3544.572661313894,
            "unit": "iter/sec",
            "range": "stddev: 0.00007060735174965541",
            "extra": "mean: 282.1214559696238 usec\nrounds: 2044"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2950.184836928453,
            "unit": "iter/sec",
            "range": "stddev: 0.00009182203000333643",
            "extra": "mean: 338.9618126575205 usec\nrounds: 1959"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 812.8207538178865,
            "unit": "iter/sec",
            "range": "stddev: 0.0003539172463429848",
            "extra": "mean: 1.2302835468987683 msec\nrounds: 693"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 470.34433202464436,
            "unit": "iter/sec",
            "range": "stddev: 0.00028570621534640975",
            "extra": "mean: 2.126101946834141 msec\nrounds: 395"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1332.3051021178442,
            "unit": "iter/sec",
            "range": "stddev: 0.00016539273599345096",
            "extra": "mean: 750.5788264342688 usec\nrounds: 1377"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 441.3091706517167,
            "unit": "iter/sec",
            "range": "stddev: 0.0004011359223467245",
            "extra": "mean: 2.265985088239203 msec\nrounds: 238"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 787.3359644952832,
            "unit": "iter/sec",
            "range": "stddev: 0.0004961121056656701",
            "extra": "mean: 1.2701058316839924 msec\nrounds: 606"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b00c12886834bab4ceaeb6be624258e312d323ef",
          "message": "Use `-p 9000:9000` (and hide 8088) when launch hadoop (#1317)",
          "timestamp": "2021-03-02T04:33:49-08:00",
          "tree_id": "a48793ed9d96bc68ca16327b068c034632d62cab",
          "url": "https://github.com/tensorflow/io/commit/b00c12886834bab4ceaeb6be624258e312d323ef"
        },
        "date": 1614689033706,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.4949496565504172,
            "unit": "iter/sec",
            "range": "stddev: 0.01043927346388036",
            "extra": "mean: 286.1271543999919 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 28.208001714475536,
            "unit": "iter/sec",
            "range": "stddev: 0.002755290945167538",
            "extra": "mean: 35.45093375000855 msec\nrounds: 12"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.8244872933228088,
            "unit": "iter/sec",
            "range": "stddev: 0.045352458384434274",
            "extra": "mean: 1.212874968599999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.7991929166836007,
            "unit": "iter/sec",
            "range": "stddev: 0.07270527331589348",
            "extra": "mean: 1.2512623412000266 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.8027155651800142,
            "unit": "iter/sec",
            "range": "stddev: 0.036702085596728384",
            "extra": "mean: 1.2457712835999928 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.3735245793961434,
            "unit": "iter/sec",
            "range": "stddev: 0.02142222289807471",
            "extra": "mean: 2.6771999894000147 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.28532145233440587,
            "unit": "iter/sec",
            "range": "stddev: 0.12539091033170086",
            "extra": "mean: 3.5048188344000435 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6110493306358482,
            "unit": "iter/sec",
            "range": "stddev: 0.09384020081974245",
            "extra": "mean: 1.6365290818000175 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.372869104044902,
            "unit": "iter/sec",
            "range": "stddev: 0.012947550512703316",
            "extra": "mean: 421.4307473999952 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.3579131820086623,
            "unit": "iter/sec",
            "range": "stddev: 0.06683840294096362",
            "extra": "mean: 736.4241051999898 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.4546576872575985,
            "unit": "iter/sec",
            "range": "stddev: 0.05369032850487999",
            "extra": "mean: 687.4469565999789 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.3822715070980058,
            "unit": "iter/sec",
            "range": "stddev: 0.08906253863500692",
            "extra": "mean: 723.4468734000302 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 21.859331285979025,
            "unit": "iter/sec",
            "range": "stddev: 0.004073337519400994",
            "extra": "mean: 45.74705360000735 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3675.4324391334208,
            "unit": "iter/sec",
            "range": "stddev: 0.00005938286408921608",
            "extra": "mean: 272.07682811761225 usec\nrounds: 1885"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2941.9508920334783,
            "unit": "iter/sec",
            "range": "stddev: 0.00009255250788412997",
            "extra": "mean: 339.9105004464569 usec\nrounds: 2252"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 848.5809380114167,
            "unit": "iter/sec",
            "range": "stddev: 0.0002133902568166912",
            "extra": "mean: 1.1784379723912042 msec\nrounds: 652"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 473.15954439746673,
            "unit": "iter/sec",
            "range": "stddev: 0.0004240918427041602",
            "extra": "mean: 2.11345203080163 msec\nrounds: 487"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1386.1691144505596,
            "unit": "iter/sec",
            "range": "stddev: 0.00021339673847451662",
            "extra": "mean: 721.4126974661192 usec\nrounds: 1223"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 499.2311958816481,
            "unit": "iter/sec",
            "range": "stddev: 0.0002575009156673501",
            "extra": "mean: 2.0030799522333305 msec\nrounds: 314"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 850.1507565796796,
            "unit": "iter/sec",
            "range": "stddev: 0.00046560567434929717",
            "extra": "mean: 1.176261965610891 msec\nrounds: 727"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe0618db4fb0a9fc86f3a4ca45ad2391452fb1ca",
          "message": "Experimental: Add initial wavefront/obj parser for vertices (#1315)\n\nThis PR is an early experimental implementation of wavefront obj\r\nparser in tensorflow-io for 3D objects.\r\nThis PR is the first step to obtain raw vertices in float32\r\ntensor with shape of `[n, 3]`.\r\n\r\nAdditional follow up PRs will be needed to handle meshs with\r\ndifferent shapes (not sure if ragged tensor will be a good fit\r\nin that case)\r\n\r\nSome background on obj file:\r\nWavefront (obj) is a format widely used in 3D (another is ply)\r\nmodeling (http://paulbourke.net/dataformats/obj/). It is simple\r\n(ASCII) with good support for many softwares. Machine learning\r\nin 3D has been an active field with some advances such as\r\nPolyGen (https://arxiv.org/abs/2002.10880)\r\n\r\nProcessing obj files are needed to process 3D with tensorflow.\r\n\r\nIn 3D the basic elements could be vertices or faces. This PR\r\ntries to cover vertices first so that vertices in obj file\r\ncan be loaded into TF's graph for further processing within\r\ngraph pipeline.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-03-05T22:38:19+05:30",
          "tree_id": "2ae3203dffcf98ac5bd3835e9a494ff2854a8ee9",
          "url": "https://github.com/tensorflow/io/commit/fe0618db4fb0a9fc86f3a4ca45ad2391452fb1ca"
        },
        "date": 1614964592296,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.3665267824290597,
            "unit": "iter/sec",
            "range": "stddev: 0.05903188968161948",
            "extra": "mean: 297.0420450000006 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 25.98199167843349,
            "unit": "iter/sec",
            "range": "stddev: 0.0010126165402938986",
            "extra": "mean: 38.48819645454879 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2522055682078788,
            "unit": "iter/sec",
            "range": "stddev: 0.05895060503412662",
            "extra": "mean: 798.5909226000103 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.2548246108364336,
            "unit": "iter/sec",
            "range": "stddev: 0.05969536658738151",
            "extra": "mean: 796.9241210000064 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.186480493677406,
            "unit": "iter/sec",
            "range": "stddev: 0.06198629580304969",
            "extra": "mean: 842.8288584000029 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.4764528224586365,
            "unit": "iter/sec",
            "range": "stddev: 0.07154874419723863",
            "extra": "mean: 2.098843690000001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3627702457435407,
            "unit": "iter/sec",
            "range": "stddev: 0.043539577255484574",
            "extra": "mean: 2.7565656547999993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6900152586372404,
            "unit": "iter/sec",
            "range": "stddev: 0.0646042317396032",
            "extra": "mean: 1.4492433138000025 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.384119030983382,
            "unit": "iter/sec",
            "range": "stddev: 0.05873740573871466",
            "extra": "mean: 295.49788019998005 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.9490879470215563,
            "unit": "iter/sec",
            "range": "stddev: 0.07107739465629696",
            "extra": "mean: 513.0604812000001 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.8031701161638531,
            "unit": "iter/sec",
            "range": "stddev: 0.07220055908973198",
            "extra": "mean: 554.5788447999826 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.8287256946043429,
            "unit": "iter/sec",
            "range": "stddev: 0.06764357269655624",
            "extra": "mean: 546.8288671999858 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 20.748734475027195,
            "unit": "iter/sec",
            "range": "stddev: 0.0019391333555173636",
            "extra": "mean: 48.19571050001059 msec\nrounds: 6"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5237.465018200621,
            "unit": "iter/sec",
            "range": "stddev: 0.000009432684187582648",
            "extra": "mean: 190.93206284431835 usec\nrounds: 2180"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3754.9840955459485,
            "unit": "iter/sec",
            "range": "stddev: 0.00000900553097978775",
            "extra": "mean: 266.31271253217034 usec\nrounds: 2362"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 880.7856919539045,
            "unit": "iter/sec",
            "range": "stddev: 0.000010973698877014021",
            "extra": "mean: 1.1353499598541783 msec\nrounds: 822"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 471.2150977169669,
            "unit": "iter/sec",
            "range": "stddev: 0.000026013002621379804",
            "extra": "mean: 2.1221730900495155 msec\nrounds: 422"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1438.1997045075027,
            "unit": "iter/sec",
            "range": "stddev: 0.00004371575124820459",
            "extra": "mean: 695.3137292866015 usec\nrounds: 1219"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 667.308234104512,
            "unit": "iter/sec",
            "range": "stddev: 0.00001689385735573606",
            "extra": "mean: 1.498557861108878 msec\nrounds: 396"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1124.847701107709,
            "unit": "iter/sec",
            "range": "stddev: 0.000016051620592321272",
            "extra": "mean: 889.0092401088933 usec\nrounds: 733"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vovannghia2409@gmail.com",
            "name": "Vo Van Nghia",
            "username": "vnvo2409"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07d833fe256b7daa3bba3f4a7e6bc53e6c05fdee",
          "message": "update `protobuf` version to `3.11.4` to match tensorflow-nightly (#1320)",
          "timestamp": "2021-03-07T21:31:26+05:30",
          "tree_id": "016ade08e1a55b5f28b2b3717b76a7fa64fb0611",
          "url": "https://github.com/tensorflow/io/commit/07d833fe256b7daa3bba3f4a7e6bc53e6c05fdee"
        },
        "date": 1615133283932,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.002603433129014,
            "unit": "iter/sec",
            "range": "stddev: 0.050502212465039525",
            "extra": "mean: 333.0443138000078 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 25.412326255789928,
            "unit": "iter/sec",
            "range": "stddev: 0.0029624331150293927",
            "extra": "mean: 39.35098227271345 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7032114801237549,
            "unit": "iter/sec",
            "range": "stddev: 0.0778592265929249",
            "extra": "mean: 1.4220473189999894 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.7322897800427242,
            "unit": "iter/sec",
            "range": "stddev: 0.0935296997209363",
            "extra": "mean: 1.365579620599999 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7336652569167449,
            "unit": "iter/sec",
            "range": "stddev: 0.026179334457856772",
            "extra": "mean: 1.3630194296000013 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.38319022124538676,
            "unit": "iter/sec",
            "range": "stddev: 0.11431193603892145",
            "extra": "mean: 2.6096699356000044 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.29528228020030167,
            "unit": "iter/sec",
            "range": "stddev: 0.17827334651717092",
            "extra": "mean: 3.3865899414000067 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6143606922144416,
            "unit": "iter/sec",
            "range": "stddev: 0.061006341583199813",
            "extra": "mean: 1.6277083033999702 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.207350090131992,
            "unit": "iter/sec",
            "range": "stddev: 0.061155907181427625",
            "extra": "mean: 453.0318975999876 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.4243591695713878,
            "unit": "iter/sec",
            "range": "stddev: 0.06323936157698015",
            "extra": "mean: 702.0701108000139 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.2862078066998708,
            "unit": "iter/sec",
            "range": "stddev: 0.08607841249865376",
            "extra": "mean: 777.4793425999974 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.3096201694426466,
            "unit": "iter/sec",
            "range": "stddev: 0.08356048127459736",
            "extra": "mean: 763.5801763999893 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 22.218219345505506,
            "unit": "iter/sec",
            "range": "stddev: 0.0016494114563470428",
            "extra": "mean: 45.008107285712285 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3485.5910781267844,
            "unit": "iter/sec",
            "range": "stddev: 0.00016705124997972305",
            "extra": "mean: 286.89538663193304 usec\nrounds: 1945"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2704.87138872933,
            "unit": "iter/sec",
            "range": "stddev: 0.00017050809197880165",
            "extra": "mean: 369.7033449230911 usec\nrounds: 1093"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 881.4153396230914,
            "unit": "iter/sec",
            "range": "stddev: 0.0002460927786251645",
            "extra": "mean: 1.134538911505236 msec\nrounds: 791"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 489.05281962094307,
            "unit": "iter/sec",
            "range": "stddev: 0.00033715391908914304",
            "extra": "mean: 2.044768908141832 msec\nrounds: 479"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1264.31094472067,
            "unit": "iter/sec",
            "range": "stddev: 0.000343503302975005",
            "extra": "mean: 790.9446676671257 usec\nrounds: 1333"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 480.9558173713009,
            "unit": "iter/sec",
            "range": "stddev: 0.00028582315396944184",
            "extra": "mean: 2.0791930648964243 msec\nrounds: 339"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 830.0967187973012,
            "unit": "iter/sec",
            "range": "stddev: 0.00017738850660437429",
            "extra": "mean: 1.2046788974769904 msec\nrounds: 634"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vovannghia2409@gmail.com",
            "name": "Vo Van Nghia",
            "username": "vnvo2409"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e2eb09c9b4354bd831c425e79cce196f2162b56",
          "message": "Revert \"update `protobuf` version to `3.11.4` to match tensorflow-nightly (#1320)\" (#1323)\n\nThis reverts commit 07d833fe256b7daa3bba3f4a7e6bc53e6c05fdee.",
          "timestamp": "2021-03-12T14:19:13+05:30",
          "tree_id": "2ae3203dffcf98ac5bd3835e9a494ff2854a8ee9",
          "url": "https://github.com/tensorflow/io/commit/7e2eb09c9b4354bd831c425e79cce196f2162b56"
        },
        "date": 1615539509353,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.6087889534582076,
            "unit": "iter/sec",
            "range": "stddev: 0.03684129143324782",
            "extra": "mean: 277.1012694000092 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 29.70463839459411,
            "unit": "iter/sec",
            "range": "stddev: 0.0027598288958537946",
            "extra": "mean: 33.66477607692367 msec\nrounds: 13"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.8852847401606482,
            "unit": "iter/sec",
            "range": "stddev: 0.04376153177523703",
            "extra": "mean: 1.1295800714000053 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.8840689770454309,
            "unit": "iter/sec",
            "range": "stddev: 0.03641842428259911",
            "extra": "mean: 1.1311334590000115 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.8040784602747156,
            "unit": "iter/sec",
            "range": "stddev: 0.08206593094121388",
            "extra": "mean: 1.2436597290000122 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.4207081216517256,
            "unit": "iter/sec",
            "range": "stddev: 0.14951596921911678",
            "extra": "mean: 2.376944842599994 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3420242714701831,
            "unit": "iter/sec",
            "range": "stddev: 0.0418463265695972",
            "extra": "mean: 2.9237691106000283 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7043574115877377,
            "unit": "iter/sec",
            "range": "stddev: 0.034274395402918115",
            "extra": "mean: 1.4197337652000215 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.4467555397864635,
            "unit": "iter/sec",
            "range": "stddev: 0.043697031441813666",
            "extra": "mean: 408.7045001999968 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.541902204987793,
            "unit": "iter/sec",
            "range": "stddev: 0.04703237057210113",
            "extra": "mean: 648.5495621999689 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.5916252929906345,
            "unit": "iter/sec",
            "range": "stddev: 0.053798675813420425",
            "extra": "mean: 628.2885829999714 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.5800946077538929,
            "unit": "iter/sec",
            "range": "stddev: 0.05108042690260943",
            "extra": "mean: 632.8734969999687 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 25.14501080585929,
            "unit": "iter/sec",
            "range": "stddev: 0.001857427974495847",
            "extra": "mean: 39.76932074998274 msec\nrounds: 8"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 4254.41082132716,
            "unit": "iter/sec",
            "range": "stddev: 0.00010916328115240729",
            "extra": "mean: 235.05017310200685 usec\nrounds: 2253"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3309.3672715438292,
            "unit": "iter/sec",
            "range": "stddev: 0.00009127349412966605",
            "extra": "mean: 302.172565915749 usec\nrounds: 2306"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 1032.63407624975,
            "unit": "iter/sec",
            "range": "stddev: 0.00016682037770654137",
            "extra": "mean: 968.3972502938619 usec\nrounds: 851"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 593.9197143797884,
            "unit": "iter/sec",
            "range": "stddev: 0.00019597566711069961",
            "extra": "mean: 1.6837292579928391 msec\nrounds: 438"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1602.9269996166308,
            "unit": "iter/sec",
            "range": "stddev: 0.00015646066023772894",
            "extra": "mean: 623.8587285878697 usec\nrounds: 1588"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 546.6676648283899,
            "unit": "iter/sec",
            "range": "stddev: 0.00023549389809766663",
            "extra": "mean: 1.829264952617822 msec\nrounds: 401"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 985.0614122167988,
            "unit": "iter/sec",
            "range": "stddev: 0.00008572510095745105",
            "extra": "mean: 1.015165133460647 msec\nrounds: 517"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c38d14ef1dae2f30874e71902e588a519036b58b",
          "message": "Enable python 3.9 build on macOS (#1324)\n\nThis PR enables python 3.9 build on macOS, as tf-nightly\r\nis available with macOS now.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-03-13T11:54:06+05:30",
          "tree_id": "554d2b75c8b287865f551a5fa2aab91f2e7056e1",
          "url": "https://github.com/tensorflow/io/commit/c38d14ef1dae2f30874e71902e588a519036b58b"
        },
        "date": 1615616958736,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.4446135703013865,
            "unit": "iter/sec",
            "range": "stddev: 0.05428021321073217",
            "extra": "mean: 290.30832619999956 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 26.02623146012986,
            "unit": "iter/sec",
            "range": "stddev: 0.0010299639385833944",
            "extra": "mean: 38.422773636356894 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2646075158764167,
            "unit": "iter/sec",
            "range": "stddev: 0.06028772295324688",
            "extra": "mean: 790.7591782000168 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.2784844275289975,
            "unit": "iter/sec",
            "range": "stddev: 0.05863486396243552",
            "extra": "mean: 782.1761285999855 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.215132576649726,
            "unit": "iter/sec",
            "range": "stddev: 0.06345731918918039",
            "extra": "mean: 822.9554693999944 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.4901308478298218,
            "unit": "iter/sec",
            "range": "stddev: 0.06674289091543588",
            "extra": "mean: 2.0402714998000078 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.36782440993354004,
            "unit": "iter/sec",
            "range": "stddev: 0.09008710424779945",
            "extra": "mean: 2.7186885181999854 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6948537222620548,
            "unit": "iter/sec",
            "range": "stddev: 0.053259382671154286",
            "extra": "mean: 1.4391518213999916 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.4114063212736374,
            "unit": "iter/sec",
            "range": "stddev: 0.05952787835923016",
            "extra": "mean: 293.13424019999275 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.980136655170911,
            "unit": "iter/sec",
            "range": "stddev: 0.07304706192608715",
            "extra": "mean: 505.01565000001847 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.7537774699738211,
            "unit": "iter/sec",
            "range": "stddev: 0.07650114501056861",
            "extra": "mean: 570.197768599985 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.8239651912965782,
            "unit": "iter/sec",
            "range": "stddev: 0.07247158901129351",
            "extra": "mean: 548.2560767999871 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 20.999506585095187,
            "unit": "iter/sec",
            "range": "stddev: 0.004028095128344396",
            "extra": "mean: 47.62016649999623 msec\nrounds: 6"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5181.0744648483615,
            "unit": "iter/sec",
            "range": "stddev: 0.000010985414324701806",
            "extra": "mean: 193.01015779345065 usec\nrounds: 2066"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3768.3427773823437,
            "unit": "iter/sec",
            "range": "stddev: 0.000008521102326748205",
            "extra": "mean: 265.3686405605182 usec\nrounds: 2426"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 878.3830632766917,
            "unit": "iter/sec",
            "range": "stddev: 0.000013557287947449988",
            "extra": "mean: 1.1384554664221693 msec\nrounds: 819"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 469.54725152508314,
            "unit": "iter/sec",
            "range": "stddev: 0.000030404495498547577",
            "extra": "mean: 2.129711113742043 msec\nrounds: 422"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1453.7605925064033,
            "unit": "iter/sec",
            "range": "stddev: 0.0000415640020760133",
            "extra": "mean: 687.8711702288733 usec\nrounds: 1310"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 659.7653071301501,
            "unit": "iter/sec",
            "range": "stddev: 0.000018277436014009177",
            "extra": "mean: 1.5156904875004784 msec\nrounds: 400"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1121.133349042675,
            "unit": "iter/sec",
            "range": "stddev: 0.00001617110192978035",
            "extra": "mean: 891.9545572824949 usec\nrounds: 707"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vovannghia2409@gmail.com",
            "name": "Vo Van Nghia",
            "username": "vnvo2409"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1395fc40886af4c10ec052d567b87fd12251824b",
          "message": "switch mnist dataset mirror to a more reliable one (#1327)",
          "timestamp": "2021-03-14T17:46:39+05:30",
          "tree_id": "52fdc5340ed447099b1b51da0750cf391fb2466b",
          "url": "https://github.com/tensorflow/io/commit/1395fc40886af4c10ec052d567b87fd12251824b"
        },
        "date": 1615724797135,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 2.9753307826971547,
            "unit": "iter/sec",
            "range": "stddev: 0.049849878888557846",
            "extra": "mean: 336.09708400001637 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 26.291880279326474,
            "unit": "iter/sec",
            "range": "stddev: 0.0011712099054167644",
            "extra": "mean: 38.03455627273293 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.27562744530794,
            "unit": "iter/sec",
            "range": "stddev: 0.06800703023813474",
            "extra": "mean: 783.9279436000197 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.3066258220870421,
            "unit": "iter/sec",
            "range": "stddev: 0.05709214357766534",
            "extra": "mean: 765.3300455999897 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.2671055376576525,
            "unit": "iter/sec",
            "range": "stddev: 0.06393332963257804",
            "extra": "mean: 789.20024439999 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.47805642301587176,
            "unit": "iter/sec",
            "range": "stddev: 0.13118183608725775",
            "extra": "mean: 2.0918032931999733 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.39262713754985223,
            "unit": "iter/sec",
            "range": "stddev: 0.04513955176598517",
            "extra": "mean: 2.5469457007999834 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7143960807238806,
            "unit": "iter/sec",
            "range": "stddev: 0.06595774723019368",
            "extra": "mean: 1.39978371520001 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.51145746292181,
            "unit": "iter/sec",
            "range": "stddev: 0.06199932178491633",
            "extra": "mean: 284.78203440001835 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.042733764008177,
            "unit": "iter/sec",
            "range": "stddev: 0.07208426839432344",
            "extra": "mean: 489.54005539999343 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.8246746761883073,
            "unit": "iter/sec",
            "range": "stddev: 0.06554359704967709",
            "extra": "mean: 548.0428994000022 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.8772205872286682,
            "unit": "iter/sec",
            "range": "stddev: 0.07477122251104662",
            "extra": "mean: 532.7024467999763 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 22.687781635487575,
            "unit": "iter/sec",
            "range": "stddev: 0.0007224671460511008",
            "extra": "mean: 44.076587833330905 msec\nrounds: 6"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5223.46091150626,
            "unit": "iter/sec",
            "range": "stddev: 0.000012166925928437256",
            "extra": "mean: 191.44395199688313 usec\nrounds: 2104"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3758.752674353394,
            "unit": "iter/sec",
            "range": "stddev: 0.000013076941953201765",
            "extra": "mean: 266.045703624814 usec\nrounds: 2345"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 881.721195216389,
            "unit": "iter/sec",
            "range": "stddev: 0.000024428671506960033",
            "extra": "mean: 1.134145357313979 msec\nrounds: 834"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 472.8717277068244,
            "unit": "iter/sec",
            "range": "stddev: 0.00004574673475322686",
            "extra": "mean: 2.1147383981898566 msec\nrounds: 442"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1438.1722101463765,
            "unit": "iter/sec",
            "range": "stddev: 0.00004663197661081016",
            "extra": "mean: 695.3270219970531 usec\nrounds: 1182"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 677.492007221407,
            "unit": "iter/sec",
            "range": "stddev: 0.000043883918546155356",
            "extra": "mean: 1.4760321735769142 msec\nrounds: 386"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1116.6584321956173,
            "unit": "iter/sec",
            "range": "stddev: 0.00003492151860760645",
            "extra": "mean: 895.5289918276632 usec\nrounds: 734"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5345316f3ef6a7ad8b4fabc3385f993c5bae6a0c",
          "message": "remove flaky centos 7 based build action (#1328)",
          "timestamp": "2021-03-14T11:02:38-07:00",
          "tree_id": "3bdfb7eacbed541ca66de81017ac955e9af23167",
          "url": "https://github.com/tensorflow/io/commit/5345316f3ef6a7ad8b4fabc3385f993c5bae6a0c"
        },
        "date": 1615745264301,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.7634758119791303,
            "unit": "iter/sec",
            "range": "stddev: 0.04353298703777202",
            "extra": "mean: 265.71181799999977 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 29.667739195817795,
            "unit": "iter/sec",
            "range": "stddev: 0.0013243666213299439",
            "extra": "mean: 33.70664658333548 msec\nrounds: 12"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2996346517492696,
            "unit": "iter/sec",
            "range": "stddev: 0.05007765080549681",
            "extra": "mean: 769.4470124000077 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.3108970063173178,
            "unit": "iter/sec",
            "range": "stddev: 0.054200031126236746",
            "extra": "mean: 762.8364358000056 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.2752942294252427,
            "unit": "iter/sec",
            "range": "stddev: 0.05193531763696232",
            "extra": "mean: 784.1327726000031 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.51757173428301,
            "unit": "iter/sec",
            "range": "stddev: 0.05271780370801293",
            "extra": "mean: 1.9320993280000038 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3977609924905316,
            "unit": "iter/sec",
            "range": "stddev: 0.05786914570688175",
            "extra": "mean: 2.5140725683999903 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7496540657218235,
            "unit": "iter/sec",
            "range": "stddev: 0.0460255776219171",
            "extra": "mean: 1.3339486114000123 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.4942564647913215,
            "unit": "iter/sec",
            "range": "stddev: 0.059450229310218615",
            "extra": "mean: 286.18391640000027 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.0133470510023552,
            "unit": "iter/sec",
            "range": "stddev: 0.0703774712851881",
            "extra": "mean: 496.68535759999486 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.85339700078722,
            "unit": "iter/sec",
            "range": "stddev: 0.06586473630099407",
            "extra": "mean: 539.5498102000033 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.9124145763039604,
            "unit": "iter/sec",
            "range": "stddev: 0.060547098482035086",
            "extra": "mean: 522.8991727999983 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 24.936401666848273,
            "unit": "iter/sec",
            "range": "stddev: 0.001203496241187308",
            "extra": "mean: 40.10201685712543 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5351.938966407923,
            "unit": "iter/sec",
            "range": "stddev: 0.000012656480465809168",
            "extra": "mean: 186.8481696589999 usec\nrounds: 2228"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3809.8396905280333,
            "unit": "iter/sec",
            "range": "stddev: 0.00001342691906972436",
            "extra": "mean: 262.4782356292274 usec\nrounds: 2453"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 911.1738532661303,
            "unit": "iter/sec",
            "range": "stddev: 0.00004650585597717721",
            "extra": "mean: 1.0974853990986129 msec\nrounds: 887"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 485.3200999842838,
            "unit": "iter/sec",
            "range": "stddev: 0.00007235189921524954",
            "extra": "mean: 2.060495742979496 msec\nrounds: 463"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1524.9452576468743,
            "unit": "iter/sec",
            "range": "stddev: 0.00004451276519977011",
            "extra": "mean: 655.7612445335176 usec\nrounds: 1235"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 677.7162883513504,
            "unit": "iter/sec",
            "range": "stddev: 0.00004966565464937255",
            "extra": "mean: 1.4755437004954601 msec\nrounds: 404"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1134.2179026468866,
            "unit": "iter/sec",
            "range": "stddev: 0.00003353766071220882",
            "extra": "mean: 881.6647997411549 usec\nrounds: 774"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ionyeneho@linkedin.com",
            "name": "Irene Onyeneho",
            "username": "StanfordMCP"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e5fac573eed60e8ec1ec31ccad50423f2da27f92",
          "message": "Adds AVRO_PARSER_NUM_MINIBATCH to override num_minibatches and logs the parsing time (#1283)\n\n* Exposes num_parallel_reads and num_parallel_calls\r\n\r\n-Exposes `num_parallel_reads` and `num_parallel_calls` in AvroRecordDataset and `make_avro_record_dataset`\r\n-Adds parameter constraints\r\n-Fixes lint issues\r\n-Adds test method for _require() function\r\n-This update adds a test to check if ValueErrors\r\nare raised when given an invalid input for num_parallel_calls\r\n\r\n* Bump Apache Arrow to 2.0.0 (#1231)\r\n\r\n* Bump Apache Arrow to 2.0.0\r\n\r\nAlso bumps Apache Thrift to 0.13.0\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Update code to match Arrow\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Bump pyarrow to 2.0.0\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Stay with version=1 for write_feather to pass tests\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Bump flatbuffers to 1.12.0\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Fix Windows issue\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Fix tests\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Fix Windows\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Remove -std=c++11 and leave default -std=c++14 for arrow build\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Update sha256 of libapr1\r\n\r\nAs the hash changed by the repo.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Add emulator for gcs (#1234)\r\n\r\n* Bump com_github_googleapis_google_cloud_cpp to `1.21.0`\r\n\r\n* Add gcs testbench\r\n\r\n* Bump `libcurl` to `7.69.1`\r\n\r\n* Remove the CI build for CentOS 8 (#1237)\r\n\r\nBuilding shared libraries on CentOS 8 is pretty much the same as\r\non Ubuntu 20.04 except `apt` should be changed to `yum`. For that\r\nour CentOS 8 CI test is not adding a lot of value.\r\n\r\nFurthermore with the upcoming CentOS 8 change:\r\nhttps://www.phoronix.com/scan.php?page=news_item&px=CentOS-8-Ending-For-Stream\r\n\r\nCentOS 8 is effectively EOLed at 2021.\r\n\r\nFor that we may want to drop the CentOS 8 build (only leave a comment in README.md)\r\n\r\nNote we keep CentOS 7 build for now as there are still many users using\r\nCentOS 7 and CentOS 7 will only be EOLed at 2024. We might drop CentOS 7 build in\r\nthe future as well if there is similiar changes to CentOS 7 like CentOS 8.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* add tf-c-header rule (#1244)\r\n\r\n* Skip  tf-nightly:tensorflow-io==0.17.0 on API compatibility test (#1247)\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* [s3] add support for testing on macOS (#1253)\r\n\r\n* [s3] add support for testing on macOS\r\n\r\n* modify docker-compose cmd\r\n\r\n* add notebook formatting instruction in README (#1256)\r\n\r\n* [docs] Restructure README.md content (#1257)\r\n\r\n* Refactor README.md content\r\n\r\n* bump to run ci jobs\r\n\r\n* Update libtiff/libgeotiff dependency (#1258)\r\n\r\nThis PR updates libtiff/libgeotiff to the latest version.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* remove unstable elasticsearch test setup on macOS (#1263)\r\n\r\n* Exposes num_parallel_reads and num_parallel_calls (#1232)\r\n\r\n-Exposes `num_parallel_reads` and `num_parallel_calls` in AvroRecordDataset and `make_avro_record_dataset`\r\n-Adds parameter constraints\r\n-Fixes lint issues\r\n- Adds test method for _require() function\r\n-This update adds a test to check if ValueErrors\r\nare raised when given an invalid input for num_parallel_calls\r\n\r\nCo-authored-by: Abin Shahab <ashahab@linkedin.com>\r\n\r\n* Added AVRO_PARSER_NUM_MINIBATCH to override num_minibatches\r\n\r\nAdded AVRO_PARSER_NUM_MINIBATCH to override num_minibatches. This is recommended to be set equal to the vcore request.\r\n\r\n* Exposes num_parallel_reads and num_parallel_calls (#1232)\r\n\r\n* Exposes num_parallel_reads and num_parallel_calls\r\n\r\n-Exposes `num_parallel_reads` and `num_parallel_calls` in AvroRecordDataset and `make_avro_record_dataset`\r\n-Adds parameter constraints\r\n-Fixes lint issues\r\n\r\n* Exposes num_parallel_reads and num_parallel_calls\r\n\r\n-Exposes `num_parallel_reads` and `num_parallel_calls` in AvroRecordDataset and `make_avro_record_dataset`\r\n-Adds parameter constraints\r\n-Fixes lint issues\r\n\r\n* Exposes num_parallel_reads and num_parallel_calls\r\n\r\n-Exposes `num_parallel_reads` and `num_parallel_calls` in AvroRecordDataset and `make_avro_record_dataset`\r\n-Adds parameter constraints\r\n-Fixes lint issues\r\n\r\n* Fixes Lint Issues\r\n\r\n* Removes Optional typing for method parameter\r\n\r\n-\r\n\r\n* Adds test method for _require() function\r\n\r\n-This update adds a test to check if ValueErrors\r\nare raised when given an invalid input for num_parallel_calls\r\n\r\n* Uncomments skip for macOS pytests\r\n\r\n* Fixes Lint issues\r\n\r\nCo-authored-by: Abin Shahab <ashahab@linkedin.com>\r\n\r\n* add avro tutorial testing data (#1267)\r\n\r\nCo-authored-by: Cheng Ren <1428327+chengren311@users.noreply.github.com>\r\n\r\n* Update Kafka tutorial to work with Apache Kafka (#1266)\r\n\r\n* Update Kafka tutorial to work with Apache Kafka\r\n\r\nMinor update to the Kafka tutorial to remove the dependency on\r\nConfluent's distribution of Kafka, and instead work with vanilla\r\nApache Kafka.\r\n\r\nSigned-off-by: Dale Lane <dale.lane@uk.ibm.com>\r\n\r\n* Address review comments\r\n\r\nRemove redundant pip install commands\r\n\r\nSigned-off-by: Dale Lane <dale.lane@gmail.com>\r\n\r\n* add github workflow for performance benchmarking (#1269)\r\n\r\n* add github workflow for performance benchmarking\r\n\r\n* add github-action-benchmark step\r\n\r\n* handle missing dependencies while benchmarking (#1271)\r\n\r\n* handle missing dependencies while benchmarking\r\n\r\n* setup test_sql\r\n\r\n* job name change\r\n\r\n* set auto-push to true\r\n\r\n* remove auto-push\r\n\r\n* add personal access token\r\n\r\n* use alternate method to push to gh-pages\r\n\r\n* add name to the action\r\n\r\n* use different id\r\n\r\n* modify creds\r\n\r\n* use github_token\r\n\r\n* change repo name\r\n\r\n* set auto-push\r\n\r\n* set origin and push results\r\n\r\n* set env\r\n\r\n* use PERSONAL_GITHUB_TOKEN\r\n\r\n* use push changes action\r\n\r\n* use github.head_ref to push the changes\r\n\r\n* try using fetch-depth\r\n\r\n* modify branch name\r\n\r\n* use alternative push approach\r\n\r\n* git switch -\r\n\r\n* test by merging with forked master\r\n\r\n* Disable s3 macOS for now as docker is not working on GitHub Actions for macOS (#1277)\r\n\r\n* Revert \"[s3] add support for testing on macOS (#1253)\"\r\n\r\nThis reverts commit 81789bde99e62523ca4d9f460bb345c666902acd.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Update\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* rename testing data files (#1278)\r\n\r\n* Add tutorial for avro dataset API (#1250)\r\n\r\n* remove docker based mongodb tests in macos (#1279)\r\n\r\n* trigger benchmarks workflow only on commits (#1282)\r\n\r\n* Bump Apache Arrow to 3.0.0 (#1285)\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Add bazel cache (#1287)\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Add initial bigtable stub test (#1286)\r\n\r\n* Add initial bigtable stub test\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Fix kokoro test\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Add reference to github-pages benchmarks in README (#1289)\r\n\r\n* add reference to github-pages benchmarks\r\n\r\n* minor grammar change\r\n\r\n* Update README.md\r\n\r\nCo-authored-by: Yuan Tang <terrytangyuan@gmail.com>\r\n\r\nCo-authored-by: Yuan Tang <terrytangyuan@gmail.com>\r\n\r\n* Clear outputs (#1292)\r\n\r\n* fix kafka online-learning section in tutorial notebook (#1274)\r\n\r\n* kafka notebook fix for colab env\r\n\r\n* change timeout from 30 to 20 seconds\r\n\r\n* reduce stream_timeout\r\n\r\n* Only enable bazel caching writes for tensorflow/io github actions (#1293)\r\n\r\nThis PR updates so that only GitHub actions run on\r\ntensorflow/io repo will be enabled with bazel cache writes.\r\n\r\nWithout the updates, a focked repo actions will cause error.\r\n\r\nNote once bazel cache read-permissions are enabled from gcs\r\nforked repo will be able to access bazel cache (read-only).\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Enable ready-only bazel cache (#1294)\r\n\r\nThis PR enables read-only bazel cache\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Rename tests (#1297)\r\n\r\n* Combine Ubuntu 20.04 and CentOS 7 tests into one GitHub jobs (#1299)\r\n\r\nWhen GitHub Actions runs it looks like there is an implicit concurrent\r\njobs limit. As such the CentOS 7 test normally is scheduled later after\r\nother jobs completes. However, many times CentOS 7 test hangs\r\n(e.g., https://github.com/tensorflow/io/runs/1825943449). This is likely\r\ndue to the CentOS 7 test is on the GitHub Actions queue for too long.\r\n\r\nThis PR moves CentOS 7 to run after Ubuntu 20.04 test complete, to try to\r\navoid hangs.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Update names of api tests (#1300)\r\n\r\nWe renamed the tests to remove \"_eager\" parts. This PR updates the api test for correct filenames\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Fix wrong benchmark tests names (#1301)\r\n\r\nFixes wrong benchmark tests names caused by last commit\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Patch arrow to temporarily resolve the ARROW-11518 issue (#1304)\r\n\r\nThis PR patchs arrow to temporarily resolve the ARROW-11518 issue.\r\n\r\nSee 1281 for details\r\n\r\nCredit to diggerk.\r\n\r\nWe will update arrow after the upstream PR is merged.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Remove AWS headers from tensorflow, and use headers from third_party … (#1241)\r\n\r\n* Remove external headers from tensorflow, and use third_party headers instead\r\n\r\nThis PR removes external headers from tensorflow, and\r\nuse third_party headers instead.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Address review comment\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Switch to use github to download libgeotiff (#1307)\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Add @com_google_absl//absl/strings:cord (#1308)\r\n\r\nFix read/STDIN_FILENO\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Switch to modular file system for hdfs (#1309)\r\n\r\n* Switch to modular file system for hdfs\r\n\r\nThis PR is part of the effort to switch to modular file system for hdfs.\r\nWhen TF_ENABLE_LEGACY_FILESYSTEM=1 is provided, old behavior will\r\nbe preserved.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Build against tf-nightly\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Update tests\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Adjust the if else logic, follow review comment\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Disable test_write_kafka test for now. (#1310)\r\n\r\nWith tensorflow upgrade to tf-nightly, the test_write_kafka test\r\nis failing and that is block the plan to modular file system migration.\r\n\r\nThis PR disables the test temporarily so that CI can continue\r\nto push tensorflow-io-nightly image (needed for modular file system migration)\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Switch to modular file system for s3 (#1312)\r\n\r\nThis PR is part of the effort to switch to modular file system for s3.\r\nWhen TF_ENABLE_LEGACY_FILESYSTEM=1 is provided, old behavior will\r\nbe preserved.\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Add python 3.9 on Windows (#1316)\r\n\r\n* Updates the PR to use attribute instead of Env Variable\r\n\r\n-Originally AVRO_PARSER_NUM_MINIBATCH was set as an environmental\r\nvariable.  Because tensorflow-io rarely uses env vars to fine tune\r\nkernal ops this was changed to an attribute. See comment here:\r\nhttps://github.com/tensorflow/io/pull/1283#issuecomment-767747791\r\n\r\n* Added AVRO_PARSER_NUM_MINIBATCH to override num_minibatches\r\n\r\nAdded AVRO_PARSER_NUM_MINIBATCH to override num_minibatches. This is recommended to be set equal to the vcore request.\r\n\r\n* Updates the PR to use attribute instead of Env Variable\r\n\r\n-Originally AVRO_PARSER_NUM_MINIBATCH was set as an environmental\r\nvariable.  Because tensorflow-io rarely uses env vars to fine tune\r\nkernal ops this was changed to an attribute. See comment here:\r\nhttps://github.com/tensorflow/io/pull/1283#issuecomment-767747791\r\n\r\n* Adds addtional comments in source code for understandability\r\n\r\nCo-authored-by: Abin Shahab <ashahab@linkedin.com>\r\nCo-authored-by: Yong Tang <yong.tang.github@outlook.com>\r\nCo-authored-by: Vo Van Nghia <vovannghia2409@gmail.com>\r\nCo-authored-by: Vignesh Kothapalli <vikoth18@in.ibm.com>\r\nCo-authored-by: Cheng Ren <chren@linkedin.com>\r\nCo-authored-by: Cheng Ren <1428327+chengren311@users.noreply.github.com>\r\nCo-authored-by: Dale Lane <dale.lane@gmail.com>\r\nCo-authored-by: Yuan Tang <terrytangyuan@gmail.com>\r\nCo-authored-by: Mark Daoust <markdaoust@google.com>",
          "timestamp": "2021-03-18T09:11:49-07:00",
          "tree_id": "3f2974463728dae0b1d3d5ba5606a24b72e637a3",
          "url": "https://github.com/tensorflow/io/commit/e5fac573eed60e8ec1ec31ccad50423f2da27f92"
        },
        "date": 1616084500698,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 2.6962058347639655,
            "unit": "iter/sec",
            "range": "stddev: 0.03203494933252425",
            "extra": "mean: 370.8915643999944 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 22.390829647637556,
            "unit": "iter/sec",
            "range": "stddev: 0.0024745610087481894",
            "extra": "mean: 44.661140999994586 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.7458334763524964,
            "unit": "iter/sec",
            "range": "stddev: 0.06914345661062173",
            "extra": "mean: 1.3407818657999997 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.7418525751977266,
            "unit": "iter/sec",
            "range": "stddev: 0.042514946312363626",
            "extra": "mean: 1.3479767186000118 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7249583089960518,
            "unit": "iter/sec",
            "range": "stddev: 0.08325888147350784",
            "extra": "mean: 1.3793896664000385 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.34743904532237413,
            "unit": "iter/sec",
            "range": "stddev: 0.049484726088422665",
            "extra": "mean: 2.8782027048000374 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.27075847820459825,
            "unit": "iter/sec",
            "range": "stddev: 0.1283138306337245",
            "extra": "mean: 3.693328484600033 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5474600604728475,
            "unit": "iter/sec",
            "range": "stddev: 0.0827550719593672",
            "extra": "mean: 1.82661726799995 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.012854485680422,
            "unit": "iter/sec",
            "range": "stddev: 0.04569725193652796",
            "extra": "mean: 496.80690140000934 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.2618519109499637,
            "unit": "iter/sec",
            "range": "stddev: 0.0709552063434444",
            "extra": "mean: 792.4860210000134 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.2942096580265743,
            "unit": "iter/sec",
            "range": "stddev: 0.06199150112540994",
            "extra": "mean: 772.672336200003 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.249471681827973,
            "unit": "iter/sec",
            "range": "stddev: 0.05451493360454044",
            "extra": "mean: 800.3382666000107 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 20.85984924378686,
            "unit": "iter/sec",
            "range": "stddev: 0.0006680026530737066",
            "extra": "mean: 47.93898499999235 msec\nrounds: 6"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3535.8075621747353,
            "unit": "iter/sec",
            "range": "stddev: 0.00005114581530392838",
            "extra": "mean: 282.82082166964415 usec\nrounds: 2086"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2619.7163865888137,
            "unit": "iter/sec",
            "range": "stddev: 0.00022358754296000503",
            "extra": "mean: 381.72071034839024 usec\nrounds: 2068"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 808.5902683198808,
            "unit": "iter/sec",
            "range": "stddev: 0.00019384194413064036",
            "extra": "mean: 1.2367203009725032 msec\nrounds: 721"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 462.0086319135727,
            "unit": "iter/sec",
            "range": "stddev: 0.00027857766175747175",
            "extra": "mean: 2.164461724141701 msec\nrounds: 406"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1243.379552624751,
            "unit": "iter/sec",
            "range": "stddev: 0.00019595989809318117",
            "extra": "mean: 804.2596469348547 usec\nrounds: 946"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 456.54994309479616,
            "unit": "iter/sec",
            "range": "stddev: 0.00043613680796612066",
            "extra": "mean: 2.1903408709709646 msec\nrounds: 341"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 797.1216603143625,
            "unit": "iter/sec",
            "range": "stddev: 0.00019086679684979758",
            "extra": "mean: 1.2545136455150747 msec\nrounds: 457"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "reachchaim@gmail.com",
            "name": "markemus",
            "username": "markemus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d65cc6605fa9df871784a453e9e0a854256339ac",
          "message": "Super Serial- automatically save and load TFRecords from Tensorflow datasets (#1280)\n\n* super_serial automatically creates TFRecords files from dictionary-style Tensorflow datasets.\r\n\r\n* pep8 fixes\r\n\r\n* more pep8 (undoing tensorflow 2 space tabs)\r\n\r\n* bazel changes\r\n\r\n* small change so github checks will run again\r\n\r\n* moved super_serial test to tests/\r\n\r\n* bazel changes\r\n\r\n* moved super_serial to experimental\r\n\r\n* refactored super_serial test to work for serial_ops\r\n\r\n* bazel fixes\r\n\r\n* refactored test to load from tfio instead of full import path\r\n\r\n* licenses\r\n\r\n* bazel fixes\r\n\r\n* fixed license dates for new files\r\n\r\n* small change so tests rerun\r\n\r\n* small change so tests rerun\r\n\r\n* cleanup and bazel fix\r\n\r\n* added test to ensure proper crash occurs when trying to save in graph mode\r\n\r\n* bazel fixes\r\n\r\n* fixed imports for test\r\n\r\n* fixed imports for test\r\n\r\n* fixed yaml imports for serial_ops\r\n\r\n* fixed error path for new tf version\r\n\r\n* prevented flaky behavior in graph mode for serial_ops.py by preemptively raising an exception if graph mode is detected.\r\n\r\n* sanity check for graph execution in graph_save_fail()\r\n\r\n* it should be impossible for serial_ops not to raise an exception now outside of eager mode. Impossible.\r\n\r\n* moved eager execution check in serial_ops",
          "timestamp": "2021-03-18T12:54:18-07:00",
          "tree_id": "03bf0fee04f313f6f51bce93be31fbf663961389",
          "url": "https://github.com/tensorflow/io/commit/d65cc6605fa9df871784a453e9e0a854256339ac"
        },
        "date": 1616097806528,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.648562819758071,
            "unit": "iter/sec",
            "range": "stddev: 0.004838633803062808",
            "extra": "mean: 274.08052140001473 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 25.94695177883436,
            "unit": "iter/sec",
            "range": "stddev: 0.0014073083985817086",
            "extra": "mean: 38.540172599994094 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.274023575871555,
            "unit": "iter/sec",
            "range": "stddev: 0.05247067073448068",
            "extra": "mean: 784.914831199967 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.2700129636598692,
            "unit": "iter/sec",
            "range": "stddev: 0.05824173126009415",
            "extra": "mean: 787.3935373999984 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.231205502112406,
            "unit": "iter/sec",
            "range": "stddev: 0.061803703195695815",
            "extra": "mean: 812.2120947999974 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.4789628786885529,
            "unit": "iter/sec",
            "range": "stddev: 0.04704294590034843",
            "extra": "mean: 2.08784447500002 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3705099461327575,
            "unit": "iter/sec",
            "range": "stddev: 0.04405127634270361",
            "extra": "mean: 2.698982876000014 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.718160268238277,
            "unit": "iter/sec",
            "range": "stddev: 0.05916557318044653",
            "extra": "mean: 1.3924468453999908 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.459895656771268,
            "unit": "iter/sec",
            "range": "stddev: 0.05848025420209442",
            "extra": "mean: 289.02605719999883 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.9911371966580254,
            "unit": "iter/sec",
            "range": "stddev: 0.06770997842786375",
            "extra": "mean: 502.22556319997693 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.8414769794160848,
            "unit": "iter/sec",
            "range": "stddev: 0.06560092479815702",
            "extra": "mean: 543.0423574000315 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.939139616038702,
            "unit": "iter/sec",
            "range": "stddev: 0.06814702122898007",
            "extra": "mean: 515.6926256000133 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 22.864865918236035,
            "unit": "iter/sec",
            "range": "stddev: 0.0006626563656492176",
            "extra": "mean: 43.73522257143187 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5260.933851823147,
            "unit": "iter/sec",
            "range": "stddev: 0.000011738716788257132",
            "extra": "mean: 190.08032189065744 usec\nrounds: 2243"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3780.2198852141078,
            "unit": "iter/sec",
            "range": "stddev: 0.000012458121057425462",
            "extra": "mean: 264.5348763735634 usec\nrounds: 2548"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 891.9549514732826,
            "unit": "iter/sec",
            "range": "stddev: 0.00009695793291414386",
            "extra": "mean: 1.1211328535687306 msec\nrounds: 799"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 476.2688209733824,
            "unit": "iter/sec",
            "range": "stddev: 0.000051089636014283115",
            "extra": "mean: 2.0996545563411715 msec\nrounds: 426"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1506.4711881062813,
            "unit": "iter/sec",
            "range": "stddev: 0.0000454819368543068",
            "extra": "mean: 663.8029375504061 usec\nrounds: 1265"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 671.9003189397126,
            "unit": "iter/sec",
            "range": "stddev: 0.000040817029580192644",
            "extra": "mean: 1.4883160073179347 msec\nrounds: 410"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1123.4952236594336,
            "unit": "iter/sec",
            "range": "stddev: 0.000028441776975868014",
            "extra": "mean: 890.0794404294959 usec\nrounds: 747"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oliverhuhuhu@gmail.com",
            "name": "Keqiu Hu",
            "username": "oliverhu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4bde0eded6adf7aa1fc9ae3d4d7dcff0baec806",
          "message": "Fix link in avro reader notebook (#1333)\n\nCorrect the link to Avro Reader tests in notebook",
          "timestamp": "2021-03-21T16:08:32-07:00",
          "tree_id": "4fc526c3a4d44b3d65fb6ad0b5fd34bd31b601ce",
          "url": "https://github.com/tensorflow/io/commit/e4bde0eded6adf7aa1fc9ae3d4d7dcff0baec806"
        },
        "date": 1616368610926,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.923569460159679,
            "unit": "iter/sec",
            "range": "stddev: 0.014023513344129691",
            "extra": "mean: 254.8699622000072 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 28.28717295258458,
            "unit": "iter/sec",
            "range": "stddev: 0.0012360831058201636",
            "extra": "mean: 35.35171229999605 msec\nrounds: 10"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2953191450495296,
            "unit": "iter/sec",
            "range": "stddev: 0.057018243721189056",
            "extra": "mean: 772.010514800013 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.3126123814256117,
            "unit": "iter/sec",
            "range": "stddev: 0.059037992873121725",
            "extra": "mean: 761.8395302000067 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.2616760653883772,
            "unit": "iter/sec",
            "range": "stddev: 0.06009363896003075",
            "extra": "mean: 792.5964733999876 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.5108310596205442,
            "unit": "iter/sec",
            "range": "stddev: 0.06510786177585767",
            "extra": "mean: 1.9575943575999872 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3934842323009052,
            "unit": "iter/sec",
            "range": "stddev: 0.05471059118637638",
            "extra": "mean: 2.541397895800003 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7366452377848881,
            "unit": "iter/sec",
            "range": "stddev: 0.05089830795225763",
            "extra": "mean: 1.3575055517999772 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.4924159484552226,
            "unit": "iter/sec",
            "range": "stddev: 0.059664375959661904",
            "extra": "mean: 286.33473639997646 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.0433115702479374,
            "unit": "iter/sec",
            "range": "stddev: 0.06369516861827614",
            "extra": "mean: 489.40162359999704 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.8548925063768145,
            "unit": "iter/sec",
            "range": "stddev: 0.06136572480179333",
            "extra": "mean: 539.1147986000078 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.8864955027763157,
            "unit": "iter/sec",
            "range": "stddev: 0.07601682690185",
            "extra": "mean: 530.0834264000741 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 23.79036576783823,
            "unit": "iter/sec",
            "range": "stddev: 0.0010004286639307175",
            "extra": "mean: 42.03382199999136 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5170.413418114685,
            "unit": "iter/sec",
            "range": "stddev: 0.000011809164946014302",
            "extra": "mean: 193.40813183264467 usec\nrounds: 2268"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3790.6472144107142,
            "unit": "iter/sec",
            "range": "stddev: 0.000013344926335855692",
            "extra": "mean: 263.8071926604908 usec\nrounds: 2398"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 902.456875029407,
            "unit": "iter/sec",
            "range": "stddev: 0.000041698099100262535",
            "extra": "mean: 1.1080861896779437 msec\nrounds: 833"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 482.75454980525103,
            "unit": "iter/sec",
            "range": "stddev: 0.00006621918166876263",
            "extra": "mean: 2.071446038993132 msec\nrounds: 436"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1530.1999915586664,
            "unit": "iter/sec",
            "range": "stddev: 0.00004527709982199959",
            "extra": "mean: 653.5093487887142 usec\nrounds: 1402"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 678.2895989014883,
            "unit": "iter/sec",
            "range": "stddev: 0.00004887456932711891",
            "extra": "mean: 1.4742965270579589 msec\nrounds: 425"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1106.6488726782181,
            "unit": "iter/sec",
            "range": "stddev: 0.000041597846107379216",
            "extra": "mean: 903.6289871961686 usec\nrounds: 781"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d32874b628a4967bd6075543d0dcb727987e6b2",
          "message": "Bump abseil-cpp to 6f9d96a1f41439ac172ee2ef7ccd8edf0e5d068c (#1336)\n\n* Bump abseil-cpp to 6f9d96a1f41439ac172ee2ef7ccd8edf0e5d068c\r\n\r\nThis PR bumps abseil-cpp to 6f9d96a1f41439ac172ee2ef7ccd8edf0e5d068c\r\nto fix the build issue.\r\n\r\nSee related changes in tensorflow/tensorflow/commit/1c9eeb9eaa1b712d71fc29bcc9054c25c7236fa2\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>\r\n\r\n* Remove flaky CentOS 7 build\r\n\r\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-03-23T08:32:22+05:30",
          "tree_id": "c90a7cf6e15ad65c9b9ce2cb30a196459c2f8155",
          "url": "https://github.com/tensorflow/io/commit/9d32874b628a4967bd6075543d0dcb727987e6b2"
        },
        "date": 1616469227908,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.2732095752784867,
            "unit": "iter/sec",
            "range": "stddev: 0.020305987584026745",
            "extra": "mean: 305.5105323999669 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 27.802733258390376,
            "unit": "iter/sec",
            "range": "stddev: 0.0023432359414339936",
            "extra": "mean: 35.9676867272831 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2505106776106372,
            "unit": "iter/sec",
            "range": "stddev: 0.06203109546794821",
            "extra": "mean: 799.6732997999743 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.2798212424321165,
            "unit": "iter/sec",
            "range": "stddev: 0.06053616987743438",
            "extra": "mean: 781.359120199977 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.163602709165626,
            "unit": "iter/sec",
            "range": "stddev: 0.07348118435723544",
            "extra": "mean: 859.3998554000109 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.46693158009319247,
            "unit": "iter/sec",
            "range": "stddev: 0.2308115301713999",
            "extra": "mean: 2.141641393799955 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.3539420402221962,
            "unit": "iter/sec",
            "range": "stddev: 0.17853764855824428",
            "extra": "mean: 2.825321341799986 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.7421375065272419,
            "unit": "iter/sec",
            "range": "stddev: 0.057092204401388846",
            "extra": "mean: 1.3474591854000209 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 3.657491889713016,
            "unit": "iter/sec",
            "range": "stddev: 0.05587615112082802",
            "extra": "mean: 273.4114059999911 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.097509535058232,
            "unit": "iter/sec",
            "range": "stddev: 0.06258696755646054",
            "extra": "mean: 476.75587799997174 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.8992013304978612,
            "unit": "iter/sec",
            "range": "stddev: 0.06586164233331573",
            "extra": "mean: 526.5371205999827 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.738445836626254,
            "unit": "iter/sec",
            "range": "stddev: 0.0639612535709442",
            "extra": "mean: 575.2264343999741 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 22.958676733503083,
            "unit": "iter/sec",
            "range": "stddev: 0.005065322183022918",
            "extra": "mean: 43.55651728571632 msec\nrounds: 7"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5590.909839972678,
            "unit": "iter/sec",
            "range": "stddev: 0.000011980342773467571",
            "extra": "mean: 178.8617646541921 usec\nrounds: 2337"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3934.4096572109042,
            "unit": "iter/sec",
            "range": "stddev: 0.000013614110419628304",
            "extra": "mean: 254.16773725308977 usec\nrounds: 2314"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 906.9092248863369,
            "unit": "iter/sec",
            "range": "stddev: 0.00004527082402871193",
            "extra": "mean: 1.1026461883495895 msec\nrounds: 807"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 483.1317173422717,
            "unit": "iter/sec",
            "range": "stddev: 0.00007303317501854846",
            "extra": "mean: 2.0698289185008236 msec\nrounds: 454"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1519.66544695467,
            "unit": "iter/sec",
            "range": "stddev: 0.00004539206786695926",
            "extra": "mean: 658.0395718044045 usec\nrounds: 1135"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 707.3953321968754,
            "unit": "iter/sec",
            "range": "stddev: 0.00006251338066193408",
            "extra": "mean: 1.4136366957559876 msec\nrounds: 424"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 1163.539296112216,
            "unit": "iter/sec",
            "range": "stddev: 0.000040549010496740807",
            "extra": "mean: 859.4466928116162 usec\nrounds: 765"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yong.tang.github@outlook.com",
            "name": "Yong Tang",
            "username": "yongtang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e04f0f183bb8c3d4e04e80f926de36cd5ae8be30",
          "message": "Release nightly even if test fails (#1339)\n\nSigned-off-by: Yong Tang <yong.tang.github@outlook.com>",
          "timestamp": "2021-03-23T11:18:41-07:00",
          "tree_id": "58c09b5720d07f036275fecafc0193405d33021c",
          "url": "https://github.com/tensorflow/io/commit/e04f0f183bb8c3d4e04e80f926de36cd5ae8be30"
        },
        "date": 1616524555950,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 2.6891005026688517,
            "unit": "iter/sec",
            "range": "stddev: 0.008850219357068074",
            "extra": "mean: 371.87156040004083 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 23.833097528669622,
            "unit": "iter/sec",
            "range": "stddev: 0.0017416669403618795",
            "extra": "mean: 41.958457090903394 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.6582907766997804,
            "unit": "iter/sec",
            "range": "stddev: 0.06981816047191738",
            "extra": "mean: 1.5190855399999919 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.6789939694868107,
            "unit": "iter/sec",
            "range": "stddev: 0.062220238270462004",
            "extra": "mean: 1.472767130400007 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.6731574069156607,
            "unit": "iter/sec",
            "range": "stddev: 0.08518928514574108",
            "extra": "mean: 1.48553665120005 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.3111679211878443,
            "unit": "iter/sec",
            "range": "stddev: 0.06419023417888636",
            "extra": "mean: 3.213698880599986 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.238811544555337,
            "unit": "iter/sec",
            "range": "stddev: 0.16836391307068607",
            "extra": "mean: 4.187402254199992 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5322620894236613,
            "unit": "iter/sec",
            "range": "stddev: 0.07792166432760286",
            "extra": "mean: 1.878773671600038 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 1.8180286912445294,
            "unit": "iter/sec",
            "range": "stddev: 0.0504716816771861",
            "extra": "mean: 550.046324799996 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.186923263704436,
            "unit": "iter/sec",
            "range": "stddev: 0.0978165605453252",
            "extra": "mean: 842.5144494000051 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.181545064625951,
            "unit": "iter/sec",
            "range": "stddev: 0.05662931225694809",
            "extra": "mean: 846.3494368000056 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.179094096459192,
            "unit": "iter/sec",
            "range": "stddev: 0.06340702762514921",
            "extra": "mean: 848.1087328000285 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 18.61636157578712,
            "unit": "iter/sec",
            "range": "stddev: 0.001786073167101108",
            "extra": "mean: 53.71618916666421 msec\nrounds: 6"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3009.7382217368668,
            "unit": "iter/sec",
            "range": "stddev: 0.0000725785662038221",
            "extra": "mean: 332.25480966345225 usec\nrounds: 2028"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2537.9804793493972,
            "unit": "iter/sec",
            "range": "stddev: 0.0001777058449951399",
            "extra": "mean: 394.01406280963465 usec\nrounds: 2022"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 780.1534767411966,
            "unit": "iter/sec",
            "range": "stddev: 0.00021088313554186918",
            "extra": "mean: 1.281799068789812 msec\nrounds: 785"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 468.67306816616605,
            "unit": "iter/sec",
            "range": "stddev: 0.0001847910859148221",
            "extra": "mean: 2.1336835161295302 msec\nrounds: 434"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1255.5190610400984,
            "unit": "iter/sec",
            "range": "stddev: 0.00016440207649672122",
            "extra": "mean: 796.4833279166459 usec\nrounds: 1354"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 426.4609286232731,
            "unit": "iter/sec",
            "range": "stddev: 0.00038165033641992364",
            "extra": "mean: 2.3448806980472052 msec\nrounds: 308"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 758.4960555011661,
            "unit": "iter/sec",
            "range": "stddev: 0.00037867481942528594",
            "extra": "mean: 1.3183984184852 msec\nrounds: 595"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1711688db441247a4a147e5828469890fee3e2c0",
          "message": "remove unused/stale azure_ops (#1338)",
          "timestamp": "2021-03-23T11:19:10-07:00",
          "tree_id": "566ea648aa13a28c327f6d5dde71cc91c5314478",
          "url": "https://github.com/tensorflow/io/commit/1711688db441247a4a147e5828469890fee3e2c0"
        },
        "date": 1616526571513,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[mnist]",
            "value": 3.126850036000881,
            "unit": "iter/sec",
            "range": "stddev: 0.02011353108176445",
            "extra": "mean: 319.8106683999981 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[lmdb]",
            "value": 26.88327988371447,
            "unit": "iter/sec",
            "range": "stddev: 0.0021611424712753165",
            "extra": "mean: 37.19784209090449 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 0.8070287423263823,
            "unit": "iter/sec",
            "range": "stddev: 0.055289520973924276",
            "extra": "mean: 1.2391132404000245 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 0.7915522211045793,
            "unit": "iter/sec",
            "range": "stddev: 0.06392327095518498",
            "extra": "mean: 1.2633405268000388 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 0.7813485347649262,
            "unit": "iter/sec",
            "range": "stddev: 0.07488806961094648",
            "extra": "mean: 1.2798385810000354 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.3606037690480034,
            "unit": "iter/sec",
            "range": "stddev: 0.048538871132385975",
            "extra": "mean: 2.7731268662000046 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.27337759384521243,
            "unit": "iter/sec",
            "range": "stddev: 0.16138256747761828",
            "extra": "mean: 3.657944259199985 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.5828320701462165,
            "unit": "iter/sec",
            "range": "stddev: 0.07016504003943505",
            "extra": "mean: 1.7157600811999374 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy]",
            "value": 2.1257460493358407,
            "unit": "iter/sec",
            "range": "stddev: 0.05890747946595905",
            "extra": "mean: 470.42307819997404 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 1.3675890667803026,
            "unit": "iter/sec",
            "range": "stddev: 0.06142016528865412",
            "extra": "mean: 731.2138012000105 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.3486345878449852,
            "unit": "iter/sec",
            "range": "stddev: 0.07898453404133902",
            "extra": "mean: 741.4906965999762 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.322452687045295,
            "unit": "iter/sec",
            "range": "stddev: 0.06665679052563159",
            "extra": "mean: 756.1707196000043 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset.py::test_io_dataset_benchmark[sql]",
            "value": 20.847205049092427,
            "unit": "iter/sec",
            "range": "stddev: 0.0022389044498543694",
            "extra": "mean: 47.96806083334104 msec\nrounds: 6"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 3478.751887161618,
            "unit": "iter/sec",
            "range": "stddev: 0.00010983439721811526",
            "extra": "mean: 287.4594200553692 usec\nrounds: 1795"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 2632.9506867904533,
            "unit": "iter/sec",
            "range": "stddev: 0.00013988366305242553",
            "extra": "mean: 379.8020240246096 usec\nrounds: 999"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 795.9460589145456,
            "unit": "iter/sec",
            "range": "stddev: 0.00031602817301754516",
            "extra": "mean: 1.256366544943672 msec\nrounds: 712"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 444.88255967120097,
            "unit": "iter/sec",
            "range": "stddev: 0.00041555272547045435",
            "extra": "mean: 2.247784225884398 msec\nrounds: 394"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1342.3239193375398,
            "unit": "iter/sec",
            "range": "stddev: 0.00014998366150812038",
            "extra": "mean: 744.9766674004568 usec\nrounds: 1362"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[hdf5]",
            "value": 479.483445492261,
            "unit": "iter/sec",
            "range": "stddev: 0.0003489872217430773",
            "extra": "mean: 2.0855777387128587 msec\nrounds: 310"
          },
          {
            "name": "tests/test_io_tensor.py::test_io_tensor_benchmark[arrow]",
            "value": 820.8417687444802,
            "unit": "iter/sec",
            "range": "stddev: 0.00029137163225190514",
            "extra": "mean: 1.2182615920356386 msec\nrounds: 603"
          }
        ]
      }
    ]
  }
}