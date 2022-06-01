QUnit.module('megfordit', function() {

    QUnit.test('A függvény létezik e?', function (assert) {
        assert.ok(megfordit, "létezik a megfordít függvény");
    });
    QUnit.test('függvény-e', function(assert) {
        assert.ok(typeof megfordit === "function", "Függvény");
      });
    QUnit.test('Helló megfordul', function(assert) {
      assert.equal(megfordit("Helló"), "ólleH");
    });
    QUnit.test('"Nagyobb szöveg" megfordul', function(assert) {
        assert.equal(megfordit("Nagyobb szöveg"), "gevözs bboygaN");
      });
  });