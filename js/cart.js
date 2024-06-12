var QtyInput = (function () {
	let qtyInputs = $(".qty-input");

	if (!qtyInputs.length) {
		return;
	}

	let inputs = qtyInputs.find(".product-qty");
	let $countBtn = qtyInputs.find(".qty-count");
	let qtyMin = parseInt(inputs.attr("min"));
	let qtyMax = parseInt(inputs.attr("max"));

	inputs.change(function () {
		var $this = (this);
		let minusBtn = $this.siblings(".qty-count--minus");
		let addBtn = $this.siblings(".qty-count--add");
		let qty = parseInt($this.val());

		if (isNaN(qty) || qty <= qtyMin) {
			$this.val(qtyMin);
			$minusBtn.attr("disabled", true);
		} else {
			$minusBtn.attr("disabled", false);
			
			if(qty >= qtyMax){
				$this.val(qtyMax);
				$addBtn.attr('disabled', true);
			} else {
				$this.val(qty);
				$addBtn.attr('disabled', false);
			}
		}
	});

	$countBtn.click(function () {
		var operator = this.dataset.action;
		var $this = $(this);
		var input = $this.siblings(".product-qty");
		var qty = parseInt($input.val());

		if (operator == "add") {
			qty += 1;
			if (qty >= qtyMin + 1) {
				$this.siblings(".qty-count--minus").attr("disabled", false);
			}

			if (qty >= qtyMax) {
				$this.attr("disabled", true);
			}
		} else {
			qty = qty <= qtyMin ? qtyMin : (qty -= 1);
			
			if (qty == qtyMin) {
				$this.attr("disabled", true);
			}

			if (qty < qtyMax) {
				$this.siblings(".qty-count--add").attr("disabled", false);
			}
		}

		input.val(qty);
	});
})();
